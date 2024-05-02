const toDoForm =document.getElementById("toDoForm");
const input = toDoForm.querySelector("input");

const deleteList = (e) => {
  const list = e.currentTarget.parentNode
  list.remove();
}

const moveDoneList = (e) => { //자식 옮김
  const list = e.currentTarget.parentNode
  
  const beforeDone = document.getElementById("beforeDone");
  const afterDone = document.getElementById("afterDone");
  
  beforeDone.removeChild(list);
  afterDone.appendChild(list);
}

function handleSubmit(e)
{
  e.preventDefault(); //새로고침 방지
  const newTodo = input.value;
  input.value = "";
  
  const list = document.createElement("li"); //list라 가져오면 안됨! li라고 가져오기

  const spanText = document.createElement("span");
  spanText.classList.add("listText");
  spanText.innerText = newTodo;
  list.appendChild(spanText);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("done");
  doneBtn.onclick = moveDoneList;
  const doneIcon = document.createElement("i");
  doneIcon.classList.add("fa-solid", "fa-v");
  doneBtn.appendChild(doneIcon);
  list.appendChild(doneBtn);
  
  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel");
  cancelBtn.onclick = deleteList;
  const cancelIcon = document.createElement("i");
  cancelIcon.classList.add("fa-solid", "fa-xmark");
  cancelBtn.appendChild(cancelIcon);
  list.appendChild(cancelBtn);

  
  

  const beforeDone = document.getElementById("beforeDone");
  beforeDone.appendChild(list);
  
}

toDoForm.onsubmit = handleSubmit;