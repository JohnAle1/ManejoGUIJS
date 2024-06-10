let lista1 = [];
let cantidadDatos = 0;

document.getElementById('btnAceptar').addEventListener('click', function() {
    cantidadDatos = parseInt(document.getElementById('Ndatos').value);
    document.getElementById('Ndatos').value = '';
    document.getElementById('btnAceptar').disabled = true;
    document.getElementById('btnllenarlista').disabled = false;
});

document.getElementById('btnllenarlista').addEventListener('click', function() {
    const Ndatos = document.getElementById('Ndatos').value;
    lista1.push(Ndatos);
    document.getElementById('Ndatos').value = '';
    cantidadDatos--;
    if (cantidadDatos === 0) {
        document.getElementById('btnllenarlista').disabled = true;
        document.getElementById('Ndatos').disabled = true;
    }
});

document.getElementById('btnmostrarlista').addEventListener('click', function() {
    document.getElementById('resultado').innerText = 'Resultado: ' + lista1.join(', ');
});
