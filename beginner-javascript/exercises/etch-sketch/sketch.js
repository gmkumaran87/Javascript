const $canvas = $('canvas');

ctx = $canvas[0].getContext('2d');

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '30';

let x = Math.floor(Math.random() * $canvas[0].width);
let y = Math.floor(Math.random() * $canvas[0].height);
const hue = 0;

console.log(x, y);
ctx.strokeStyle = `hue(${Math.random() * 360}, 100%, 50%)`;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw(key) {
    // hue += 1;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    switch (key) {
        case 'ArrowUp':
            y -= 10;
            break;
        case 'ArrowDown':
            y += 10;
            break;
        case 'ArrowRight':
            x += 10;
            break;
        case 'ArrowLeft':
            x -= 10;
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleKey(e) {
    if (e.key.includes('Arrow')) {
        e.preventDefault();
        draw(e.key);
    }
}

$(window).keydown(handleKey);