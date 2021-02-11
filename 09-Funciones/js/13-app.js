const reproductor = {
    cancion:'',
    reproducir: id =>  console.log(`Reproduciendo cancion con el id ${id}`),
    pausar: () =>  console.log('pausando....'),
    borrar: id =>   console.log(`Borrando cancion ${id}`),
    playlist: nombre =>   console.log(`Creando playlist...${nombre}`),
   reproducirPlaylist: nombre =>   console.log(`Reproduciendo la playlist ${nombre}`),

   set nuevaCancion(cancion){
       this.cancion = cancion;
       console.log(`Añadiendo ${cancion}`)
   },
   get obtenerCancion(){
    console.log(`${this.cancion}`)
   }
   
}
reproductor.nuevaCancion = 'Just dance';
reproductor.obtenerCancion

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.playlist('Top 20');
reproductor.playlist('Rock');
reproductor.reproducirPlaylist('Rock');










































