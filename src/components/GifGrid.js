// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => { //recibimos los props entre llaves desde el padre

       
    // usaremos el custom HOOK
    const { data:images,loading } = useFetchGifs( category );
      
    return (
        <>
            <h3 className="animate__animated animate__bounce">{ category } </h3>
            { loading && <p className="animate__animated animate__bounce">Loading</p> }
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

