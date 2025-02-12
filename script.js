const filterBlock = document.querySelectorAll(".block");

document.querySelector("nav").addEventListener("click", event => {
    if(event.target.tagName !== "A") return false;

    let filterClass = event.target.dataset["f"];
    filterBlock.forEach(element => {
        element.classList.remove("hide")
        if(!element.classList.contains(filterClass) && filterClass !== "fromAllCountries") {
            element.classList.add("hide");
        }
    });
});
