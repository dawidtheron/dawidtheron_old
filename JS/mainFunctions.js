
$(document).ready(function () {

    const menuDropdown = $('#navbarDropdownMenuLink-projects')

    $(menuDropdown).click(function () {
        $('.dropdown-menu').slideToggle()
    })
});

$('#content').load('frontpage.html').ready(function () {
    $('#page-section').addClass('bg-img-frontpage');
});

$('#services').click(function () {
    $('#content').load('services.html');
    $('#page-section').addClass('bg-img-services').css('animation', 'none');
});
$('#about').click(function () {
    $('#content').load('about.html');
    $('#page-section').addClass('bg-img-about').css('animation', 'none');
});
$('#enquiries').click(function () {
    $('#content').load('enquiries.html');
    $('#page-section').addClass('bg-img-enquiries').css('animation', 'none');
});