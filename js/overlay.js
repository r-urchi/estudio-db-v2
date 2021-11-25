// abrir info

const solicitarEntrevista = document.getElementById('servicios-esp__boton');
const overlayInfo = document.getElementById('overlay-info');

solicitarEntrevista.addEventListener('click', () =>{
    overlayInfo.classList.add('activo');
})

//boton cerrar info

document.querySelector('#btn-cerrar-info').addEventListener('click', () => {
    overlayInfo.classList.remove('activo');
})

// cerrar con el overlay 

overlayInfo.addEventListener('click', (e) => {

    if(e.target.id === 'overlay-info'){
      overlayInfo.classList.remove('activo');
    };
});





