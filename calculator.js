document.getElementById("calculate").addEventListener("click", function(event)
{
    event.preventDefault();
    var st = parseInt(document.getElementById("st").value);
    var nd = parseInt(document.getElementById("nd").value);
    var calculation = document.getElementById("calculation").value;
    var result = 0;
    if(calculation == "sum") {
        result = st + nd
    }
    else if(calculation == "difference") {
       result = st - nd
    }
    else if(calculation == "ratio") {
        result= st / nd
    }
    else if(calculation == "product") {
        result= st * nd
    }
    else if(calculation == "remainder") {
        result= st % nd
    }
    document.getElementById("result").value = result;
})