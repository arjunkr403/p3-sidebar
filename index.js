const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    search = body.querySelector(".search-box"),
    modeSw = body.querySelector(".toggle-switch"),
    modetxt = body.querySelector(".mode-txt");

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});
search.addEventListener("click", () => {
    sidebar.classList.remove("close");
});
modeSw.addEventListener("click", () => {
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        modetxt.innerHTML="Light Mode";
    }else{
        modetxt.innerHTML="Dark Mode";
    }
});