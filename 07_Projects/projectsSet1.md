# projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-bgcymher?file=1-colorchanger%2Fstyle.css,1-colorchanger%2Fchaiaurcode.js,index.html,1-colorchanger%2Findex.html)

# solution code

## project 1

```javascript
console.log("harshit")
const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body") 

buttons.forEach((button)=>{
  console.log(button)
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    let color="grey"
    switch(color){
      case "grey":
        body.style.backgroundColor=e.target.id
        break
      case "white":
        body.style.backgroundColor=e.target.id
        break
      case "blue":
        body.style.backgroundColor=e.target.id
        break
      case "yellow":
        body.style.backgroundColor=e.target.id
        break
      case "purple":
        body.style.backgroundColor=e.target.id
        break

      default:
        console.log("color not found")  
    }
  })
})

```

## project 2
[click here](
    https://stackblitz.com/edit/dom-project-chaiaurcode-bgcymher?file=BMICalculator%2Findex.html,BMICalculator%2Fstyle.css,BMICalculator%2Fchaiaurcode.js
)

```javascript
const form=document.querySelector('form')

// this usecase will give you empty
// const height=parseInt(document.querySelector('#height').value)
//   const weight=parseInt(document.querySelector('#weight').value)

form.addEventListener('submit' , function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=document.querySelector('#results')
  if(height==''||height<0||isNaN(height)){
    results.innerHTML=`please give me a valid height ${height}`
  }
  else if(weight==''||weight<0||isNaN(weight)){
    results.innerHTML=`please give me a valid height ${weight}`
  }
  else{
    const bmi = weight / ((height / 100) ** 2);
  results.innerHTML=`<span>${bmi}</span>`
  }
  

})



```

## project 3 solution code

```javascript

const clock=document.getElementById('clock')
setInterval(function(){
  let date=new Date()
  clock.innerHTML=date.toLocaleTimeString()
},1000)


```

## project 4 unlimited time changing the backgroundcolor

```javascript
// Generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startchangingcolor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 2000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

const stopchangingcolor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startchangingcolor);

document.querySelector('#stop').addEventListener('click', stopchangingcolor);




```