(() => {

    // función para obtener información de una película por Id
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }

    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getAllMovieActors( id: string ) {
        console.log({ id });
    }

    function getMovieCastByIdMovie( idMovie: string ) {
        console.log({ idMovie });
    }

    // funcion para obtener el bio del actor por el id
    function getUsuario( ActorId: string ) {
        console.log({ ActorId });
    }

    function getBiographyActorById( ActorId: string ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    function movie(title: string, description: string, rating: number, cast: string[] ) {
        console.log({ title, description, rating, cast });
    }

    interface Movie{
        cast         : string[];
        description  : string;
        rating       : number;
        title        : string;
    }

    function createMovie({title, description, rating, cast}: Movie) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActorIfActorNotExists( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    interface Actor{
        fullName  : string;
        birthDate : Date;
    }

    function createActor({fullName, birthDate}: Actor): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if(checkFullName(fullName)) return false;
        console.log('Crear actor');
        return true;        

    }

    function checkFullName(fullName: string){
        if ( fullName === 'fernando' ) return false;
        return true;
    }

})();