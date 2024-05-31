
document.getElementById('registro-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const contrasena = document.getElementById('contraseña').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    const user = {
        nombre: nombre,
        apellido: apellido,
        contraseña: contraseña,
        correo: correo,
        telefono: telefono
    };

   
    const url = 'https://veraxapi.stackcode.io/api/createuser'; // URL del servicio POST

    fetch(url,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        alert('Usuario registrado con éxito!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Hubo un error al registrar el usuario. Por favor, intente nuevamente más tarde.');
    });
});
