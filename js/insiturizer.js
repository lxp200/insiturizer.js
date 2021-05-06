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

    if (document.getElementById('insitu-noise') == null) {
        inSituAddNoise();
    }
}

function inSituAddNoise() {
    let noise = document.getElementById('insitu-box').appendChild(document.createElement("style"));
    noise.id = "insitu-noise";

    noise.innerHTML =
        `#insitu-box::after {
                background: url(data:image/png;base64,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);
                content:'';
                height: 100%;
                left: 0;
                mix-blend-mode: overlay;
                opacity: .9;
                position: absolute;
                top: 0;
                width: 100%; }`;
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
