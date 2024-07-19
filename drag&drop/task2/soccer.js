'use strict';

document.addEventListener('mousedown', function(event) {
    if(!event.target.classList.contains('draggable')) return;

    document.body.style.userSelect = 'none';

    const element = event.target;
    const shiftX = event.clientX - event.target.getBoundingClientRect().left;
    const shiftY = event.clientY - event.target.getBoundingClientRect().top;

    event.target.ondragstart = function(event) {return false}

    event.target.style.position = 'fixed';
    event.target.indexZ = 1000

    document.body.append(event.target)

    function moveAt(x, y){
        let top = y - shiftY
        let left = x - shiftX

            if(left < 0){
                left = 0
            } else if(left + element.offsetWidth> window.innerWidth){
                left = window.innerWidth - element.clientWidth
            }

            if(top < 0)
                top = 0
            else if(top + element.offsetHeight > window.innerHeight) {
                top = window.innerHeight - element.offsetHeight

            }

        element.style.top = top + 'px'
        element.style.left = left + 'px'
    }

    moveAt(event.clientX, event.clientY);

    document.onmousemove = function(event) {
        moveAt(event.clientX, event.clientY)
        if(element.getBoundingClientRect().bottom === window.innerHeight)
            window.scrollBy(0, 2)
        if(element.getBoundingClientRect().top === 0)
            window.scrollBy(0, -2)
    };

    event.target.onmouseup = function() {
        document.onmousemove = null;
        document.onscroll = null;
        event.target.onmouseup = null;
        event.target.style.top = event.target.getBoundingClientRect().top + window.scrollY + 'px'
        event.target.style.position = 'absolute';
        document.body.style.userSelect = '';
    };
})