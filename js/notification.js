document.getElementById("open-snackbar").addEventListener("click", function() {
    let x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", ""); 
    }, 2900);
})