function* createIdGenerator() {
    let n = 0
    while (true) {
        n++
        yield n

    }

}
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)
console.log(idGenerator.next().value)

//advanced


let fontValue = document.querySelector('.font_size').textContent
console.log(fontValue);

function* newFontGenerator(fontsSize = +fontValue) {
    const text = document.querySelector('.text')
    while (true) {
        text.style.fontSize = `${fontsSize}px`
        let res = yield fontsSize
        if (res == "up") {
            fontsSize++
            text.style.fontSize = `${fontsSize}px`
        } else if (res == 'down') {
            fontsSize--
            text.style.fontSize = `${fontsSize}px`
        }
        document.querySelector('.font_size').innerHTML = fontsSize
    }

}
const fontGenerator = newFontGenerator()
console.log(fontGenerator.next('up'));


const up = document.querySelector('#plus')
up.addEventListener('click', () => {
    console.log(fontGenerator.next('up'));
})
const down = document.querySelector('#minus')
down.addEventListener('click', () => {
    console.log(fontGenerator.next('down'));
})