import React, { useState, useEffect } from 'react'

import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ( { category } ) => { //recibimos los props entre llaves desde el padre

    const [images, setImages] = useState([])
    
    // useEffect es para que se ejecuta una sola vez el componente
    useEffect(() => {
        getGifs( category ).then(setImages);       
    }, [ category ])
    

    return (
        <>
            <h3>{ category } </h3>
        <div className="card-grid">
            
                { 
                    images.map( img => (
                       <GifGridItem 
                       key={img.id}
                       img={ img }/>              
                    ))
                }
            
        </div>
        </>
    )
}

