const $turtle = $('img');
let x = 0;
let y = 0;
let rotate = 0;
let turn = 0;

function handleKeyPress(e) {
    // If the key pressed is not an Arrow key return nothing and exit the function
    if (!e.key.includes('Arrow')) return;

    switch (e.key) {
        case 'ArrowUp':
            y -= 1;
            rotate = -90;
            break;
        case 'ArrowDown':
            y += 2;
            rotate = 90;
            break;
        case 'ArrowLeft':
            x -= 2;
            turn = 270;
            rotate = 0;
            break;
        case 'ArrowRight':
            x += 2;
            turn = 0;
            rotate = 0;
            break;
        default:
            break;
    }
    console.log(x, y);
    $turtle.css({
        transform: `translateX(${x * 10}px) translateY(${y * 10}px) rotateX(${turn}deg) rotate(${rotate}deg)`,
    });
    console.log(e.key);
}
$(document).on('keydown', handleKeyPress);
console.log($turtle);