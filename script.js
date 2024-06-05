@font-face {
    font-family: 'Brittany';
    src: url('fonts/brittany.ttf') format('truetype');
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
}

.background-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('25c1b03b09ce66f525241186a0e79aee.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

.welcome-container {
    text-align: center;
    padding: 20px;
    background: rgba(255, 255, 255, 0.8); /* Fondo blanco semitransparente para mejorar la legibilidad */
    border-radius: 10px;
}

h1, p {
    font-style: italic;
    color: blue;
    font-family: 'Brittany', Arial, sans-serif;
}

button {
    padding: 10px 20px;
    border: none;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}

button:hover {
    background-color: #0056b3;
}

/* Media Query para dispositivos móviles */
@media (max-width: 768px) {
    h1 {
        font-size: 1.5em;
    }

    p {
        font-size: 1.2em;
    }

    button {
        width: 80%; /* Hacer que el botón sea más ancho en móviles */
        max-width: 300px; /* Limitar el ancho máximo del botón */
        bottom: 10px; /* Ajustar la posición en móviles */
    }
}
