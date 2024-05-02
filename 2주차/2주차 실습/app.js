const counter = document.getElementById("counter");
const resetBtn = document.getElementById("reset");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

resetBtn.addEventListener("click", ()=>{
  counter.innerText = 0;
})

plusBtn.addEventListener("click", ()=>{
  let number = (counter.innerText);
  number++;
  counter.textContent = number//.toString();
})

minusBtn.addEventListener("click", ()=>{
  let number = (counter.innerText);
  number--;
  counter.textContent = number//.toString();
})


/*let root = document.getElementById("root");
const btn = document.createElement('button')
const btnText = document.createTextNode("Button By JS");
root.appendChild(btn);
btn.appendChild(btnText);


const changeBtn = (event) =>{
  if(event.target.innerText === "Changed")
    event.target.innerText = 'Button By JS';
  else
    event.target.innerText = "Changed";
}

btn.addEventListener('click', changeBtn);


console.log(root);
console.log(num);*/