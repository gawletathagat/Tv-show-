
const button = document.querySelector('#searchForm');
const h1 = document.querySelector('h1');

button.addEventListener('mouseover', function () {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    const newColor = ` rgb(${r},${g},${b}) `;
    document.body.style.backgroundColor = newColor;

    // const newTextColor = ` rgb(${r - 100},${g},${b - 100}) `;
    // h1.style.color = newTextColor;
})

const delayedColorChanger = function (color, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}


delayedColorChanger('red', 1000)
    .then(() => delayedColorChanger('orange', 1000))
    .then(() => delayedColorChanger('yellow', 1000))
    .then(() => delayedColorChanger('green', 1000))
    .then(() => delayedColorChanger('blue', 1000))
    .then(() => delayedColorChanger('indigo', 1000))


async function rainbow() {
    await delayedColorChanger('red', 1000)
    await delayedColorChanger('green', 1000)
    await delayedColorChanger('blue', 1000)
}