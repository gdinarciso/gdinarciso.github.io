function hello() {
    document.querySelector('h1').innerHTML = 'Hellyeah!';
}

let counter = 0;
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Counter is now ${counter}`);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('button').onclick = count;
});