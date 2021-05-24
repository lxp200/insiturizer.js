function inSitu() {
    let moodFilter     = `saturate(${range(50,70)}%)
                          contrast(${range(80,90)}%)
                          brightness(${range(5,10) / 100 + 1})
                          sepia(${range(5,15)}%)
                          hue-rotate(${range(-5,5)}deg)`;
    let wallGradient   = `radial-gradient(#666, #555 ${range(35,65)}%, #000)`;
    let borderColor    =  array("111", "222", "ddd");
    let artBorder      = `${range(0,2)}vw solid #${borderColor}`;
    let artShadow      = `${range(-10,10)}px ${range(5,10)}px ${range(20,50)}px rgb(0 0 0 / ${range(80,100)}%),
                          inset 0 0 0 1px #${borderColor}`; // css hack not style
    let artPerspective = `perspective(${range(500,1000)}px)
                          rotate(${range(-5,5) / 10}deg)
                          rotateX(${range(-1,1)}deg)
                          rotateY(${range(-2,2)}deg)`;

    document.getElementById('insitu-box').style.filter     = moodFilter;
    document.getElementById('insitu-box').style.background = wallGradient;
    document.getElementById('insitu-art').style.border     = artBorder;
    document.getElementById('insitu-art').style.boxShadow  = artShadow;
    document.getElementById('insitu-art').style.transform  = artPerspective;
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
        if (e.target.hasAttribute('insitusrc')) {
            document.getElementById('insitu-art').src = e.target.getAttribute('insitusrc');
            if (window.getComputedStyle(document.getElementById('insitu-box')).display === "none") {
                document.getElementById('insitu-box').style.display = "block";
            }
        }
    }, false);
}

window.onload = listenToTrig();
