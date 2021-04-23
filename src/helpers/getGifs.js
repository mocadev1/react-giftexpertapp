export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&lang=es&limit=10&api_key=uwz8zqvnsCEQtNHMZLhPUxRpBzp877Xq`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    
    /**
     * Al ser una función async retorna una promesa que resuelve la colección de las imágenes
     */
    return gifs;
    
}