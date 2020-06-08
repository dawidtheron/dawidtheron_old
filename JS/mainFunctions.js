$(document).ready(function () {
    const menuDropdown = $('#navbarDropdownMenuLink-projects')

    $(menuDropdown).click(function () {
        $('.dropdown-menu').slideToggle()
    })
})