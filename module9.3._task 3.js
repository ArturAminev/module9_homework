<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Задание 3</title> 
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
    <div class="form"> 
        <label for="input">Введите число!</label><br> 
        <input type="number" id="input" class="v"></input> 
    </div> 
    <button type="submit" id="button" class="button" >Вычисляем</button> 
    <div id="result">Здесь будет результат запроса</div>
<script> 
const inputNode = document.getElementById('input')
const buttonNode = document.getElementById('button')
const resultNode = document.getElementById('result') 
    
const url = 'https://picsum.photos/v2/list?limit=' 
    
const checkInputValueLimit = url => {
  const inputResult = inputNode.value 
  
  if (1 <= inputResult && inputResult <= 10) { 
    const limit = url + inputResult 
    xhrRequest(limit) 
  } else { 
    resultNode.innerHTML = `Число вне диапазона от 1 до 10` 
  }
}
const xhrRequest = limit => { 
  const xhr = new XMLHttpRequest() 
  xhr.open('GET', limit, true) 
  xhr.onload = function () { 
    if (xhr.status !== 200) { 
      console.log('Status is', xhr.status) 
    } else if (xhr.onerror) { 
      console.log('Error. Status is', xhr.status) 
    } else { 
      const response = JSON.parse(xhr.response) 
        displayResult(response) 
    }
  } 
  xhr.send()
}
    
const displayResult = apiData => { 
  const resultData = apiData.map( 
    item =>
      `<div class="card"><img src="${item.download_url}" class="card-image"/><p>${item.author}</p></div>`,
  ) 
  resultNode.innerHTML = resultData.join('')
}
buttonNode.addEventListener('click', () => { 
      checkInputValueLimit(url)
})
</script>
</body>
</html