import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import "./App.css";

function App() {
  const deleteList = (e) => {
    const list = e.currentTarget.parentNode;
    list.remove();
  };
  const moveDoneList = (e) => {
    //자식 옮김
    const list = e.currentTarget.parentNode;
    const ul = list.parentNode;
    if (ul.id === "beforeDone") {
      const beforeDone = document.getElementById("beforeDone");
      const afterDone = document.getElementById("afterDone");

      beforeDone.removeChild(list);
      afterDone.appendChild(list);
    } else {
      list.style.textDecoration = "line-through";
    }
  };

  function handleSubmit(e) {
    e.preventDefault(); //새로고침 방지 -> 이거 맨 앞에 있어야 함

    const toDoForm = document.getElementById("toDoForm");
    const input = toDoForm.querySelector("input");

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

  return (
    <>
      <Header>
        <HeaderTitle>
          <span>To Do !</span>
        </HeaderTitle>
        <HeaderForm onSubmit={handleSubmit} id="toDoForm">
          <HeaderInput type="text" placeholder="Write your To-Do" required />
          <HeaderSubmitBtn>
            <FontAwesomeIcon icon={faPlus} />
          </HeaderSubmitBtn>
        </HeaderForm>
      </Header>
      <Main>
        <MainToDoSection id="toDo">
          <h2 className="sectionName">To-Do</h2>
          <ul id="beforeDone" className="toDoList"></ul>
        </MainToDoSection>
        <MainToDoSection id="done">
          <h2 className="sectionName">Completed</h2>
          <ul id="afterDone" className="doneList"></ul>
        </MainToDoSection>
      </Main>
    </>
  );
}

const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /*이거 안해주면 내가 상상한대로 요소의 크기가 안잡힐 수도 있다*/
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 20vh;
`;

const HeaderTitle = styled.h1`
  width: 100%; /*옆에 못 오게 만듬*/
  text-align: center;
  span {
    display: inline-block;
    width: 30%;
    border: 3px silver solid;
    border-radius: 0.25em;

    background: radial-gradient(circle, #f5f5f5, #d3d3d3, #e0e0e0, #d3d3d3);
    font-family: "Grandiflora One", cursive; /*웹 폰트 적용*/
  }
`;

const HeaderForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const HeaderInput = styled.input`
  border: 3px solid red; /*아쉽게도 그라데이션을 border에 직접 적용은 불가능하다*/
  width: 20vw;
  height: 5vh;

  padding-left: 8px; /*입력란에 너무 달라붙지 않도록*/

  &:focus {
    outline: none; /*기본적으로 focus하면 테두리가 검은색으로 돌아감*/
  }
`;

const HeaderSubmitBtn = styled.button`
  width: 5vw;
  height: 5vh;
  border: 3px solid pink;
  background-color: pink;

  border-radius: 0.75em;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap; /*명시*/

  justify-content: center;
`;

const MainToDoSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  /*width 50%면 서로 너무 먼 느낌, margin-top 없으면 너무 붙어있는 느낌*/
  margin-top: 5vh;
  width: 30%;

  h2 {
    position: relative;
    top: 5px;
    color: red;
    margin-bottom: 20px;
  }

  li button {
    border-radius: 1.25em;
    width: 10%;

    margin-right: 5px;
  }

  li button:hover {
    color: red;
  }

  li button.cancel {
    display: inline-block;
    width: 30px;
  }

  li button.done {
    display: inline-block;
    width: 30px;
  }

  @font-face {
    font-family: "Orbit"; /*폰트 이름은 내 맘대로*/
    /*format도 알려줌으로써, 브라우저가 적용할 수 있는 타입일 때만 다운로드하게 유도*/
    src: url("./fonts/Orbit/Orbit-Regular.ttf") format("truetype");
  }

  li span.listText {
    display: inline-block;
    width: 240px;

    margin-left: 10px;
    font-family: "Orbit", "recursive";

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ul {
    li {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      flex-wrap: nowrap; /*안넘어가게 만들어서 요소 간 크기 조절*/

      width: 300px;
      height: 40px;

      margin-bottom: 10px;

      border: 3px solid black;
      border-radius: 1.25em;
    }
  }

  ul.toDoList {
    @keyframes scaling {
      0% {
        transform: scale(1);
      }

      50% {
        transform: scale(1.05);
      }
      100% {
        transform: scale(1);
      }
    }
    animation: scaling 2s infinite linear;
    li {
      background: linear-gradient(to right, #ff007f, #c0c0c0);
    }
  }

  ul.doneList {
    @keyframes blur {
      from {
        opacity: 1;
      }
      50% {
        opacity: 0.1;
      }
      to {
        opacity: 1;
      }
    }
    animation: blur 2s infinite linear;
    li {
      background-color: rgba(0, 0, 0, 0.3); /* 배경색: 블랙 */
      box-shadow: 0 0 20px rgba(255, 0, 127, 0.5),
        0 0 40px rgba(192, 192, 192, 0.8);
    }
  }
`;

export default App;
