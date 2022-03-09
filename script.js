let colorSelection = '';
let backgroundValue = "rgb(0,0,0)";

const ten = document.querySelector('.ten');
ten.addEventListener('click', () => {gridSize(10*10)});
console.log(ten);

const twenty = document.querySelector('.twenty');
twenty.addEventListener('click', () => {gridSize(20*20)});
console.log(twenty);

const forty = document.querySelector('.forty');
forty.addEventListener('click', () => {gridSize(40*40)});
console.log(forty);

const reset = document.querySelector('.clear');
reset.addEventListener('click', () => {clear()});

/* const randomColors = document.querySelector('.rainbow');
randomColors.addEventListener('click', () => {colorSelection = 'rainbow'}); */

// Need to add rainbow colors to the selection, but currently not working properly

/* if (colorSelection == '') {
    backgroundValue = "rgb(0,0,0)";
    return backgroundValue;
} else if (colorSelection == 'rainbow') {
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    backgroundValue = `"rgb(${R},${G},${B})"`;
    return backgroundValue;
}; */
 

function gridSize(size) {
    switch (size) {
        case (10*10):
            clear();
            for (i=1; i <= size; i++) {
                const container = document.querySelector('.container');
                const newDiv = document.createElement('div');
                /* newDiv.style.border = '1px solid black'; */
                newDiv.style.background = '#fff';
                newDiv.style.height =  '60px';
                newDiv.style.width = '60px';
                newDiv.classList.add('newDiv');
                newDiv.addEventListener("mouseenter", () => {newDiv.style.background = '#000000'})
                container.appendChild(newDiv);
            }
            break;
        case (20*20):
            clear();
            for (i=1; i <= size; i++) {
                const container = document.querySelector('.container');
                const newDiv = document.createElement('div');
                /* newDiv.style.border = '1px solid black'; */
                newDiv.style.background = '#fff';
                newDiv.style.height =  '30px';
                newDiv.style.width = '30px';
                newDiv.addEventListener("mouseenter", () => {newDiv.style.background = '#000000'})
                container.appendChild(newDiv);
            }
            break;

        case(40*40):
            clear();
            for (i=1; i <= size; i++) {
                const container = document.querySelector('.container');
                const newDiv = document.createElement('div');
                /* newDiv.style.border = '1px solid black'; */
                newDiv.style.background = '#fff';
                newDiv.style.height =  '15px';
                newDiv.style.width = '15px';
                newDiv.addEventListener("mouseenter", () => {newDiv.style.background = '#000000'});
                container.appendChild(newDiv);
            }
            break;
    }
}

//clear function working finally!

function clear() {
    const container = document.querySelector('.container');
    container.innerHTML = '';
}

/* function randomColor(){
    const squares = document.querySelectorAll('.newDiv');
    squares.addEventListener("mouseenter", ()  => {squares.style.background = `'${rainbow()}'`});
}

function rainbow() {
        let R = Math.floor(Math.random() * 256);
        let G = Math.floor(Math.random() * 256);
        let B = Math.floor(Math.random() * 256);
        let final = `"rgb(${R},${G},${B})"`;
    return final;
} */