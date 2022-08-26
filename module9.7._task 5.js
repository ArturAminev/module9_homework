<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Задание №5</title>
  <style> 
    .button { 
      padding: 0; 
     background-color: transparent; 
      border:none; 
      outline: none; 
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      margin: 5px 10px; 
      padding: 10px 15px; 
      border-radius: 1px; 
      font-size: 12px; 
      line-height: 15px;
      text-transform: uppercase; 
      color: white; 
      background: #315EFB;
      transition: 0.3s; 
    } 
    .button:hover {
      box-shadow: 0px 2px 8px 2px rgba(141,150,178,.3);
      transform: scale(1.05); 
    } 
    .card { 
      width: 200px; 
      margin: 20px;
    } 
    .card-image { 
      display: block;
      width: 200px; 
      height: 150px;
    } 
  </style> 
</head>
<body>
  <div>
    <div class="form"> 
      <label for="input">Номер страницы</label><br> 
        <input type="number" id="input" class="form-item-one"></input> 
    </div> 
    <div class="form"> 
      <label for="input">Лимит</label><br> 
        <input type="number" id="input" class="form-item-two"></input> 
    </div> 
    <button type="submit" id="button" class="button"> Запрос </button> 
    <div id="result">Здесь будет результат запроса</div>
  </div>
  <script>
  let button = document.querySelector('.button')
  let inputOne = document.querySelector('.form-iteml-one')
  let inputTwo = document.querySelector('.form-item-two')
  const resultNode = document.getElementById('result'); 


  function checkingTheRange(value, number) {
    return typeof value === "number" && !isNaN(value) && value >= number[0] && value <= number[1];
  }

  function sendingRequest(InputValueOne, InputValueTwo) {
    let url = `https://picsum.photos/v2/list?page=${InputValueOne}&limit=${InputValueTwo}`;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      let response = JSON.parse(xhr.response);
      let images = ``;
      localStorage.clear();
      for (let img of response) {
        images += `<img src="${img.download_url}" width="300px" style="margin: 10px;">`;
      }
      localStorage.setItem("images", images);
      resultNode.innerHTML = images;
    }
    xhr.send();
  }

  button.addEventListener('click', () => { 
    let InputValueOne = +inputOne.value;
    let InputValueTwo = +inputTwo.value;
    let number = [1, 10];
    if (checkingTheRange(InputValueOne, number) && checkingTheRange(InputValueTwo, number)) { 
      sendingRequest(InputValueOne, InputValueTwo)
    } else if (checkingTheRange(InputValueOne, number)) {
      resultNode.innerText = "Лимит вне диапазона от 1 до 10";
    } else if (checkingTheRange(InputValueTwo, number)) {
      resultNode.innerText = "Номер страницы вне диапазона от 1 до 10";
    } else { 
      resultNode.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
    }
  });

  </script>
</body>
</html>