let menu = document.querySelector(".menu")
let list = document.querySelector(".list");
menu.addEventListener('click', () => {
    if (menu.innerHTML === 'dehaze'){
        menu.innerHTML = 'cancel'
        list.classList.add("active")
    } else {
        menu.innerHTML = 'dehaze'
        list.classList.remove("active")
    }
});
