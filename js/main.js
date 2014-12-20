(function() {
    'use strict';

    var querySelector = document.querySelector.bind(document);

    var navdrawerContainer = querySelector('.navdrawer-container');
    var body = document.body;
    var appbarElement = querySelector('.app-bar');
    var menu = querySelector('.menu-icon');
    var main = querySelector('main');

    function closeMenu() {
        body.className = '';
    }

    function toggleMenu(e) {
        e.preventDefault();
        if(body.className == 'expanded') return body.className = '';
        body.className = 'expanded';

    }

    function isDesktop(){
      if(body.clientWidth > 768) body.className = '';
    }

    menu.addEventListener('click', toggleMenu);
    window.addEventListener('resize', isDesktop);
    navdrawerContainer.addEventListener('click', function(event) {
        if (event.target.nodeName === 'A' || event.target.nodeName === 'LI') {
            closeMenu();
        }
    });

})();