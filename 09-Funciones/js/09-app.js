//Añadir funciones en un obj

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function() {
        console.log('pausando....')
    },
    borrar: function(id){
        console.log(`Borrando cancion ${id}`);
    },
    playlist: function(nombre) {
       console.log(`Creando playlist...${nombre}`);
   },
   reproducirPlaylist: function(nombre){
       console.log(`Reproduciendo la playlist ${nombre}`)
   }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist('Top 20');
reproductor.playlist('Rock');
reproductor.reproducirPlaylist('Rock');



/*
reproductor.borrar = function(id) {
    console.log(`Borrando canción ... ${id}`)
}

reproductor.borrar(30);
*/

