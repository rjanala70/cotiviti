document.getElementById("calculate").addEventListener("click", function(){
    var height=document.getElementById("height").value;
    var weight=document.getElementById("weight").value;

    var BMI = weight / (height * height);

    if (BMI<18.5)
    {
        alert("Your BMI is " + BMI + "You are Underweight")
    }
    If (BMI>18.5 & BMI<25)
    {
        alert("Your BMI is " + BMI + "You are Normal weight")
    }
    If (BMI>25 & BMI<30)
    {
        alert("Your BMI is " + BMI + "You are Overweight")
    }
    If (BMI<30)
    {
        alert("Your BMI is " + BMI + "You are Obese")
    }
})
