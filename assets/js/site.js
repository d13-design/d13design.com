/**
 * Created by kdaulton on 2/3/14.
 */

(function() {
    var bodyEl = document.querySelector('body');
    var toggleClass = function(el, className) {
        if (el.classList) {
            el.classList.toggle(className);
        } else {
            var classNameVal = el.className || '';

            // FIXME: lazy ass...
            if (!classNameVal || (classNameVal && classNameVal.indexOf(className) === -1)) {
                el.className = classNameVal + className;
            } else {
                el.className = classNameVal.split(className).join(' ');
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