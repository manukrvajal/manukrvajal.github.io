const invitados = [
    { nombre: "Yenny Villamizar", documento: "1094272702" },
];

function verificarInvitacion() {
    const documento = document.getElementById('documento').value;
    const invitado = invitados.find(inv => inv.documento === documento);
    const resultado = document.getElementById('resultado');
    const botonWhatsapp = document.getElementById('whatsapp');
    
    if (invitado) {
        resultado.textContent = `!Que alegria, eres uno de nuestros invitados ${invitado.nombre}!`;
        resultado.style.color = 'blue';
        botonWhatsapp.style.display = 'inline-block';
        botonWhatsapp.setAttribute('data-nombre', invitado.nombre);
        botonWhatsapp.setAttribute('data-documento', documento);
    } else {
        resultado.textContent = 'Lo siento, no estás en la lista de invitados.';
        resultado.style.color = 'red';
        botonWhatsapp.style.display = 'none';
    }
}

function confirmarPorWhatsapp() {
    const nombre = document.getElementById('whatsapp').getAttribute('data-nombre');
    const documento = document.getElementById('whatsapp').getAttribute('data-documento');
    const numeroTelefono = '573046137661'; 

    const mensaje = `Hola, soy ${nombre}, confirmo mi asistencia a la fiesta.`;
    const url = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, '_blank');
}
