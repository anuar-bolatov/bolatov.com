function openNav() {	
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
        x.className += " responsive";
        document.body.style.overflowY = "hidden";
    } else {
        x.className = "navbar";
        document.body.style.overflowY = "visible";
    }

}