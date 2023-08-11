function cifrar() {
    let diccionario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let textoEntrada = document.getElementById('Mensaje').value.toLowerCase();
    let textoSalida = ''; 

    for (let i = 0; i < textoEntrada.length; i++) {
        let letraActual = textoEntrada[i];
        
        if (letraActual === ' ') {
            textoSalida += ' ';
            continue;
        }

        let indiceLetra = diccionario.indexOf(letraActual);
        let nuevoIndice = (indiceLetra + 5) % diccionario.length;
        textoSalida += diccionario[nuevoIndice];
    }
    document.getElementById('MensajeCifrado').value = textoSalida;
}

function descifrar() {
    let diccionario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let textoEntrada = document.getElementById('MensajeDescifrar').value.toLowerCase();
    let textoSalida = '';

    for (let i = 0; i < textoEntrada.length; i++) {
        let letraActual = textoEntrada[i];

        if (letraActual === ' ') {
            textoSalida += ' ';
            continue;
        }

        let indiceLetra = diccionario.indexOf(letraActual);
        let nuevoIndice = (indiceLetra - 5 + diccionario.length) % diccionario.length;
        textoSalida += diccionario[nuevoIndice];
    }

    document.getElementById('MensajeOriginal').value = textoSalida;
}
