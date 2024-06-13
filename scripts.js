const slider = document.querySelector('.slider');
const container = document.querySelector('.container');
const beforeImage = document.querySelector('.before');

let isDragging = false;

slider.addEventListener('mousedown', function (e) {
    e.preventDefault();
    isDragging = true;
    document.addEventListener('mousemove', moveSlider);
    document.addEventListener('mouseup', stopDragging);
});

container.addEventListener('mouseleave', stopDragging);

function moveSlider(e) {
    if (!isDragging) return;

    let rect = container.getBoundingClientRect();
    let offsetX = e.clientX - rect.left;
    if (offsetX < 0) offsetX = 0;
    if (offsetX > rect.width) offsetX = rect.width;
    slider.style.left = offsetX + 'px';
    beforeImage.style.clip = `rect(0, 500px, 300px, ${offsetX}px)`;
}

function stopDragging() {
    if (isDragging) {
        isDragging = false;
        document.removeEventListener('mousemove', moveSlider);
    }
}