import React from 'react'

export const GifGrid = ( { category } ) => { //recibimos los props entre llaves desde el padre


    const getGifs = async()  =>{
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=fvds0FidlulyF0AHSYe108wmbeVsseZQ&q=goku&limit=10&offset=0&rating=g&lang=en';
        const resp = await fetch( url );
        const { data } = await resp.json(); //desestructuramos para no usar data.data
        // console.log(data);
        const gifs = data.map( img => {
            return{
                id:img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            }
        })

        console.log(gifs);
    }

    getGifs();

    return (
        <div>
            <h3>{ category } </h3>
        </div>
    )
}

