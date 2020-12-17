const $result = $('.result');
/* eslint-disable */
const funkyLetters = {
    '-': '₋',
    '!': 'ᵎ',
    '?': 'ˀ',
    '(': '⁽',
    ')': '₎',
    '+': '⁺',
    '=': '₌',
    0: '⁰',
    1: '₁',
    2: '²',
    4: '₄',
    5: '₅',
    6: '₆',
    7: '⁷',
    8: '⁸',
    9: '⁹',
    a: 'ᵃ',
    A: 'ᴬ',
    B: 'ᴮ',
    b: 'ᵦ',
    C: '𝒸',
    d: 'ᵈ',
    D: 'ᴰ',
    e: 'ₑ',
    E: 'ᴱ',
    f: '𝒻',
    F: 'ᶠ',
    g: 'ᵍ',
    G: 'ᴳ',
    h: 'ʰ',
    H: 'ₕ',
    I: 'ᵢ',
    i: 'ᵢ',
    j: 'ʲ',
    J: 'ᴶ',
    K: 'ₖ',
    k: 'ₖ',
    l: 'ˡ',
    L: 'ᴸ',
    m: 'ᵐ',
    M: 'ₘ',
    n: 'ₙ',
    N: 'ᴺ',
    o: 'ᵒ',
    O: 'ᴼ',
    p: 'ᵖ',
    P: 'ᴾ',
    Q: 'ᵠ',
    q: 'ᑫ',
    r: 'ʳ',
    R: 'ᵣ',
    S: 'ˢ',
    s: 'ˢ',
    t: 'ᵗ',
    T: 'ₜ',
    u: 'ᵘ',
    U: 'ᵤ',
    v: 'ᵛ',
    V: 'ᵥ',
    w: '𝓌',
    W: 'ʷ',
    x: 'ˣ',
    X: 'ˣ',
    y: 'y',
    Y: 'Y',
    z: '𝓏',
    Z: 'ᶻ',
};
/* eslint-enable */
const filterObj = {
    sarcastic(letter, index) {
        if (index % 2) {
            return letter.toUpperCase();
        }
        return letter;
    },
    funky(letter, index) {
        if (funkyLetters[letter]) {
            return funkyLetters[letter.toLowerCase()];
        }
        return funkyLetters[letter.toUpperCase()];
    },
    unable(letter, index) {
        const mod = Math.floor(Math.random() * 3);
        if (letter === ' ' || mod === 2) return '..';
        return letter;
    },
};

function transform() {
    $('p').empty();

    const $text = $('[name="text"]');
    const $filters = $('input[name="filter"]:checked').val();

    const convertedText = $text.val().split('').map(filterObj[$filters]).join('');

    $result.append(convertedText);
    console.log($result.text());
}

$(document).ready(transform);

const $radio = $('input[name="filter"]');

$radio.toArray().forEach((el) => {
    $(el).on('click', transform);
});