const express = require("express");
const cors = require("cors");
const app = express();

// add middleware : enable all CORS request
app.use(cors());

// parse body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let id = 1;

const todoList = [
  {
    id: 0,
    text: "할일을 더 추가해 보세요",
    done: false,
  },
];

app.get("/api/todo", (req, res) => {
  res.json(todoList);
});

app.post("/api/todo", (req, res) => {
  const { text, done } = req.body;
  todoList.push({
    id: id++,
    text,
    done,
  });
  return res.send("success");
});

app.delete("");

// 서버 정상 작동 확인 : 포트 4000
app.listen(4000, () => {
  console.log("Start server");
});
