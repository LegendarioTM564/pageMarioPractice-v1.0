const menuBoton = document.getElementById('responsive-menu');

menuBoton.addEventListener('click', (e) =>{

    const menu = document.getElementById('responsive-links');

    menu.classList.toggle('hidden');

});