console.log('--- Code By : Lakshyaraj Dash ---');

const circles = document.querySelectorAll('div.circle');
let getRating = document.querySelectorAll('span.getRating')[0];
let rating = 0;

getRating.innerHTML = `${rating} / 5`;

const setBgColor = (index) => {
    for (let i = 0; i < circles.length; i++) {
        const circle = circles[i];
        if (i <= index) {
            circle.classList.add('yellow');
        } else {
            circle.classList.remove('yellow');
        }
    }
}

Array.from(circles).forEach((element, index) => {
    element.innerHTML = index + 1;
    element.addEventListener('click', () => {
        setBgColor(index);
        rating = index + 1;
        getRating.innerHTML = `${rating} / 5`;
    })
})
