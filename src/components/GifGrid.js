import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ( { category } ) => { //recibimos los props entre llaves desde el padre

    // const [count, setCount] = useState(0)
    
    // useEffect es para que se ejecuta una sola vez el componente
    useEffect(() => {
        getGifs();       
    }, [])
    const [images, setImages] = useState([])

    // Obtener las imagenes con fech
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
        setImages(gifs);
    }

   

    return (
        <div>
            <h3>{ category } </h3>
            
                { 
                    images.map( img => (
                       <GifGridItem 
                       key={img.id}
                       img={ img }/>              
                    ))
                }
            
        </div>
    )
}

