document.addEventListener('DOMContentLoaded', function() {
    const colors = document.querySelectorAll('.color');
    const gridElement = document.querySelector('.cuadricula');
    const active = (event) => {
        if( event.target.style.backgroundColor && event.target.style.backgroundColor !== 'transparent') {
            event.target.style.backgroundColor = 'transparent';
        }else{
            event.target.style.backgroundColor = currentColor;
        }
    }

    let isMouseDown = false;

    document.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

 
    const changeColor = (event) => {
        currentColor = event.target.attributes['data-color'].value; 
    }

    colors.forEach(color => {
        color.addEventListener('click', changeColor);

   });   
    let currentColor = 'red';

    for (let i =0 ; i<24*24; i++){
        const cell = document.createElement('div');
        cell.classList.add('cuadro');
        gridElement.appendChild(cell);
    }

    const cells = document.querySelectorAll('.cuadro');
    cells.forEach(cell => {
        cell.addEventListener('mousedown', active);

        cell.addEventListener('mouseover', (event) => {
            if(isMouseDown){
                active(event);
            }
        }); 
    },)
});