# Ex.08 Design of a Standard Calculator
## Date:

## AIM:
To design a web application for a standard calculator with minimum five operations.

## DESIGN STEPS:

### Step 1:
Clone the github repository and create Django admin interface.

### Step 2:
Change settings.py file to allow request from all hosts.

### Step 3:
Use CSS for creating attractive colors.

### Step 4:
Write JavaScript program for implementing five different operations.

### Step 5:
Validate the HTML and CSS code.

### Step 6:
Publish the website in the given URL.

## PROGRAM :
```
calculatordev.html:
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="style.css">
</head>
<body style= "background-image: url('benjamin-voros-phIFdC6lA4E-unsplash.jpg')" align="center">
    
    <div class="card">
        

      <div class="calculator">
        <h3 class="card-title" >Gokkul<br> 212223240039</h3>
        
        <form>
          <div class="display">
            <input type="text" name="display">
          </div>
          <div>
            <input type="button" value="AC" onclick="display.value = '' " class="operator">
            <input type="button" value="DE" onclick="display.value =  display.value.toString().slice(0,-1)" class="operator">
            <input type="button" value="." onclick="display.value += '.' " class="operator">
            <input type="button" value="/" onclick="display.value += '/' " class="operator">
          </div>
          <div>
            <input type="button" value="7" onclick="display.value += '7' ">
            <input type="button" value="8" onclick="display.value += '8' ">
            <input type="button" value="9" onclick="display.value += '9' ">
            <input type="button" value="*" onclick="display.value += '*' " class="operator">
          </div>
          <div>
            <input type="button" value="4" onclick="display.value += '4' ">
            <input type="button" value="5" onclick="display.value += '5' ">
            <input type="button" value="6" onclick="display.value += '6' ">
            <input type="button" value="-" onclick="display.value += '-' " class="operator">
          </div>
          <div>
            <input type="button" value="1" onclick="display.value += '1' ">
            <input type="button" value="2" onclick="display.value += '2' ">
            <input type="button" value="3" onclick="display.value += '3' ">
            <input type="button" value="+" onclick="display.value += '+' " class="operator">
          </div>
          <div>
            <input type="button" value="00" onclick="display.value += '00' ">
            <input type="button" value="0" onclick="display.value += '0' ">
            <input type="button" value="=" onclick="display.value = eval(display.value)" class="equal operator">
          </div>
        </form>
      </div>
    </div>
    <script src="script.js"></script>

</body>
</html
```
```
style.css:
body{
  width:95%;
  height:90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(90deg, #edc0bf 0,#c4caef 58%);
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
h3{
  color: #fff;
}

.card-title {
  font-size: 22px;
}

p, a {
  font-size: 1rem;
}

a {
  color: #4d4ae8;
  text-decoration: none;
}
.shape {
  position: absolute;
  width: 150px;
  top: .5rem;
  left: .5rem;
}
.calculator{
  background: #3a4452;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: auto;
	backdrop-filter: blur(50%);
  background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background */
  border-radius: 10px;
  box-shadow: 0 15px 30px rgb(0, 0, 0); /* Soft, diffused shadow */
  backdrop-filter: blur(4px); /* Creates the blurry, frosted glass effect */
  -webkit-backdrop-filter: blur(4px); /* For Safari */
  padding: 20px;
}
.calculator form input{
  border: 0;
  outline: 0;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  box-shadow: -8px -8px 15px rgb(0, 0, 0),5px 5px 15px rgb(0, 0, 0);
  background: transparent;
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  margin: 10px;
}

form .display{
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
}
form .display input{
  text-align: right;
  flex: 1;
  font-size: 45px;
  box-shadow: none;
}
form input.equal{
  width: 145px;
}
form input.operator{
  color:#45c8f7;
}
```
```
scripts.js:


const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
  display.focus();
  if (btnValue === "=" && output !== "") {
    output = eval(output.replace("%", "/100"));
  } else if (btnValue === "AC") {
    output = "";
  } else if (btnValue === "DEL") {
    output = output.toString().slice(0, -1);
  } else {
    if (output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
  }
  display.value = output;
};

buttons.forEach((button) => {
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

```

## OUTPUT:
![Alt text](<calculator/calcapp/static/Screenshot 2023-12-21 184232.png>)
## RESULT:
The program for designing a standard calculator using HTML and CSS is executed successfully.
