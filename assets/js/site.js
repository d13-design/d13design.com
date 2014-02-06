/**
 * Created by kdaulton on 2/3/14.
 */

(function() {
    var bodyEl = document.querySelector('body');
    var toggleClass = function(el, className) {
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var className = el.className;
            if (!className || !className.length) {
                return;
            }

            var classList = className.split(' ');
            for(var i= 0, j=classList.length; i<j; i++) {
            }
        }
    };
    var toggleBookshelf = function(e) {
        e.preventDefault();
        toggleClass(bodyEl, 'site-nav-open');
    };

    var triggers = document.querySelectorAll('.site-nav-trigger');
    for (var i = triggers.length; i--;) {
        triggers[i].addEventListener('click', toggleBookshelf);
    }
})();