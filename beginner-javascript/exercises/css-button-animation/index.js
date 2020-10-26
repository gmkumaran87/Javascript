let isPop = 0;

function animation() {
    if (isPop === 0) {
        $('#main-button').css('opacity', '0');
        $('.btn1').css({ transform: `translateX(-80px) rotate(1080deg)` });
        $('.btn2').css({ transform: `translateX(80px) rotate(1080deg)` });
        $('.btn3').css({ transform: `translateY(-90px) rotate(1080deg)` });
        isPop = 1;
    } else if (isPop === 1) {
        $('#main-button').css('opacity', '1');
        $('.btn1').css('transform', `translateX(0px)`);
        $('.btn2').css('transform', `translateX(0px)`);
        $('.btn3').css('transform', `translateY(0px)`);
        isPop = 0;
    }
}

/*eslint-disable */
let $mainButton = $('#main-button').on('click', animation);