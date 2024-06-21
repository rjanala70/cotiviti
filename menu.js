document.getElementById("open").addEventListener("click", function(){
    document.getElementById("menu").classList.add("active");
    document.getElementById("background").classList.add("visible")
});

document.getElementById("close").addEventListener("click", function(){
    document.getElementById("menu").classList.remove("active");
    document.getElementById("background").classList.remove("visible")
});
document.getElementById("background").addEventListener("click", function(){
    document.getElementById("menu").classList.remove("active");
    document.getElementById("background").classList.remove("visible")
});