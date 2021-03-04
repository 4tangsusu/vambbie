let random = Math.floor(Math.random() * 3);
let img = document.getElementById('picture');
img.src = `${random}.jpg`;
function show() {
    let layer = document.getElementById('layer');
    layer.style.display = 'block';
    let attr = document.getElementById('attr');
    attr.style.display = 'block';
    img.style.opacity = 1;
    img.style.transform = 'translate(-50%, -45%)';
}