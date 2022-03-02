function gridSize(size) {
    switch (size) {
        case (16*16):
            for (i=1; i <= size; i++) {
                const container = document.querySelector('.container');
                const newDiv = document.createElement('div');
                newDiv.style.border = '1px solid black';
                newDiv.style.background = '#fff';
                newDiv.style.height =  '60px';
                newDiv.style.width = '60px';
                container.appendChild(newDiv);
            }
            break;
        case (32*32):
            for (i=1; i <= size; i++) {
                const container = document.querySelector('.container');
                const newDiv = document.createElement('div');
                newDiv.style.border = '1px solid black';
                newDiv.style.background = '#fff';
                newDiv.style.height =  '30px';
                newDiv.style.width = '30px';
                container.appendChild(newDiv);
            }
            break;

        case(64*64):
            for (i=1; i <= size; i++) {
                const container = document.querySelector('.container');
                const newDiv = document.createElement('div');
                newDiv.style.border = '1px solid black';
                newDiv.style.background = '#fff';
                newDiv.style.height =  '15px';
                newDiv.style.width = '15px';
                container.appendChild(newDiv);
            }
            break;
    }
}

//clear funtion not removing elements. Need to rework clear function and find whats wrong with the code!

function clear() {
    for (i =1; i <= 64*64; i++) {
        const container = document.querySelector('.container');
        container.removeChild('div');
    }
}

const sixteen = document.querySelector('.sixteen');
sixteen.addEventListener('click', () => {gridSize(16*16)});
console.log(sixteen);

const thirtyTwo = document.querySelector('.thirtyTwo');
thirtyTwo.addEventListener('click', () => {gridSize(32*32)});
console.log(thirtyTwo);

const sixtyFour = document.querySelector('.sixtyFour');
sixtyFour.addEventListener('click', () => {gridSize(64*64)});
console.log(sixtyFour);

const reset = document.querySelector('.clear');
reset.addEventListener('click', () => {clear()});