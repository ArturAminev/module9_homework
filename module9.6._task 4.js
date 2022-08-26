<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Задание 4</title> 
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
      <label for="input">Введите первое число!</label><br> 
        <input type="number" id="input" class="form-item-one"></input> 
    </div> 
    <div class="form"> 
      <label for="input">Введите второе число!</label><br> 
        <input type="number" id="input" class="form-item-two"></input> 
    </div> 
    <button type="submit" id="button" class="button"> Отправка запроса </button> 
    <div id="result">Здесь будет результат запроса</div>
  </div>
<script>
let button = document.querySelector('.button')
let inputOne = document.querySelector('.form-item-one')
let inputTwo = document.querySelector('.form-item-two')
const resultNode = document.getElementById('result'); 


button.addEventListener('click', () => { 
  let InputValueOne = inputOne.value;
  let InputValueTwo = inputTwo.value;
  
  if ((100 <= InputValueOne && InputValueOne <= 300 ) && (100 <=  InputValueTwo && InputValueTwo <= 300)) { 
    fetch (`https://picsum.photos/${InputValueOne}/${InputValueTwo}`)
      .then((response) => {
        resultNode.innerHTML = `<img src=${response.url}>`;
      })
      .catch(() => {
        resultNode.innerHTML = `error`;
      })
  } else { 
      resultNode.innerHTML = `одно из чисел вне диапазона от 100 до 300`;
  }
});

</script>
</body>
</html>