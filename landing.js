// window scroll//
window.onscroll = function(){
    scrollFunction();
   
}
function scrollFunction(){
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky){
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

//window scroll-close//








// mobilemenu nav//
function mobilemenu(){
    var sections = document.getElementById('sections');
  
    if (sections.style.display === 'block'){
        sections.style.display = 'none';
   
    } else {
      
        sections.style.display = 'block';
    }
}
//mobilemenu nav close//

// menus//

// sisig menu//
function sisigDIV(){
    var sisigmenu = document.getElementById('sisigmenu');

    if (sisigmenu.style.display === 'block'){
        sisigmenu.style.display = 'none';
    } else {
        sisigmenu.style.display = 'block';
    }
}

function sisigCANCEL(){
    var sisigmenu = document.getElementById('sisigmenu');

    if (sisigmenu.style.display === 'block'){
        sisigmenu.style.display = 'none';
      
    }
}

//sisig menu-close//





//menus-close//