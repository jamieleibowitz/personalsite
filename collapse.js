function collapse(element) {
    let collapsing = document.getElementsByClassName(element);
    for(let i = 0; i < collapsing.length; i++) {
        collapsing.addEventListener("click", function(){
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        })
    }
}