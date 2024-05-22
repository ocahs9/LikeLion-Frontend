const body = {
  email: "eve.holt@reqres.in",
  password: "cityslicka",
};

//Post 요청 (fetch로!)
fetch(`https://reqres.in/api/login`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json", //전송 데이터 형식 지정
  },
  body: JSON.stringify(body),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("에러");
    }
    return response.json(); //응답을 json 형식으로 변환
  })
  .then((data) => {
    console.log("멋사 실습 과제:", data);
  });
