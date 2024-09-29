const menu= document-getElementById( 'menu');
constprofPic = document.getElementById('prof-pic');
profpic-addEventListener ('click', function () {
    menu. classList.remove(' fade-out' );
    menu.classList.add( 'fade-in');
});

document.addEventListener ('click', function (event) {
const isClickInsideMenu = menu. contains (event.target);
const isClickOnProfPic = profPic.contains(event.target);

if
(lisClickInsideMenu && isClickOnProfPic) {
    menu. classList.remove(' fade-in');
    menu.classList.add('fade-out');
}

});