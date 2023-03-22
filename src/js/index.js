const buttonMenuMobile = document.getElementById('menuMobile');

function onViewMenuMobile() {
    let currentWidthWindow = window.innerWidth
    if (currentWidthWindow < 1023) {
        const navBarOptions = document.getElementById('navBarOptions')
        navBarOptions.style.display == "" || navBarOptions.style.display == "none" ? navBarOptions.style.display = "block" : navBarOptions.style.display = "none"
    }
}

buttonMenuMobile.addEventListener('click', onViewMenuMobile)