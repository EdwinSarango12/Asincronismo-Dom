
const obtenerProductos = 'https://www.freetogame.com/api/games';

(async function conectarAPI() {
    try {
        const respuesta = await fetch(obtenerProductos);
        const datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error('Error al conectar con la API:', error);
    }
})();


//Obtener los datos del segundo juego de la lista

fetch(obtenerProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.slice(0, 5).forEach(juego => {
            console.log(`🎮 ${juego.title}`);
            console.log(`🖼 Imagen: ${juego.thumbnail}`);
            console.log(`📄 Descripción: ${juego.short_description}`);
            console.log('---');
        });
    })
    .catch(e => console.log('Error al conectar con la API:', e));

