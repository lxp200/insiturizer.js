function inSitu() {
    let wallFilter      = `saturate(${range(50,90)}%)
                           contrast(${range(80,95)}%)
                           brightness(${range(5,10) / 100 + 1})
                           sepia(${range(5,10)}%)
                           hue-rotate(${range(-5,5)}deg)`;
    let wallGradient    = `radial-gradient(#555, #2b2b2b ${range(35,65)}%, #000)`;

    let framePadding    = `${range(15,20)}px`;
    let frameBackground = `#${array("bbb","ccc","ddd")}`;
    let frameBorder     = `${range(15,25)}px solid #${array("111","eee")}`;
    let frameCorners    = `${range(1,3)}px`;

    let shadowX = range(-10,10);
    let shadowY = range(-10,10);

    let frameShadow     = `inset ${shadowX}px ${shadowY}px ${range(15,25)}px 0px rgba(0, 0, 0, .25),
                           inset ${shadowX / 2}px ${shadowY / 2}px ${range(5,15)}px 0px rgba(0, 0, 0, .25),
                           ${shadowX * 2}px ${shadowY * 2}px ${range(25,50)}px rgba(0, 0, 0, .5),
                           ${shadowX}px ${shadowY}px ${range(10,25)}px rgba(0, 0, 0, .5)`;

    let frameAngle      = `rotate(${range(-5,5) / 10}deg)
                           rotateX(${range(-5,5)}deg)
                           rotateY(${range(-5,5)}deg)`;

    let artShadow       = `0px 0px ${array(1,2)}px rgba(0, 0, 0, .3)`;

    document.getElementById('insitu-wall').style.filter     = wallFilter;
    document.getElementById('insitu-wall').style.background = wallGradient;

    document.getElementById('insitu-frame').style.padding      = framePadding;
    document.getElementById('insitu-frame').style.background   = frameBackground;
    document.getElementById('insitu-frame').style.border       = frameBorder;
    document.getElementById('insitu-frame').style.borderRadius = frameCorners;
    document.getElementById('insitu-frame').style.boxShadow    = frameShadow;
    document.getElementById('insitu-frame').style.transform    = frameAngle;

    document.getElementById('insitu-art').style.boxShadow = artShadow;
}

function range(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function array() {
    let list = Array.prototype.slice.call(arguments);
    return list[Math.floor(Math.random() * list.length)];
}

function listenToTrig() {
    document.addEventListener('click', function(e) {
        if (e.target.hasAttribute('data-insitu-src')) {
            document.getElementById('insitu-art').src = e.target.getAttribute('data-insitu-src');
            if (window.getComputedStyle(document.getElementById('insitu-wall')).display === "none") {
                document.getElementById('insitu-wall').style.display = "flex";
            }
        }
    }, false);
}

window.onload = listenToTrig();
