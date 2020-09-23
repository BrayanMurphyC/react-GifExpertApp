// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => { //recibimos los props entre llaves desde el padre

       
    // usaremos el custom HOOK
    const { data:images,loading } = useFetchGifs( category );
      
    return (
        <>
            <h3>{ category } </h3>
            { loading ? 'Cargando...' : 'Data Cargada' }
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

