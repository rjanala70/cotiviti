document.getElementById("box").innerHTML = "My name is Raaj";
document.getElementById("button").addEventListener("click", function(){
document.getElementById("box").classList.add("active");
document.getElementById("box").style.backgroundColor="yellow";
document.getElementById("box").style.fontSize="100px";
});
document.getElementById("button#").addEventListener("click", function(){
    document.getElementById("box").classList.remove("active");
    document.getElementById("box").style.backgroundColor="red";
    document.getElementById("box").style.fontSize="40px";
    });