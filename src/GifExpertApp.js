import React, { useState } from 'react'
import { AddCategory }  from './components/AddCategory'
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball', 'One Piece']

    // useState es un Hook que te permite añadir el estado de React a un componente funcional
    const [categories, setCategories] = useState(['One punch']);

    // Para añadir el elementro al arreglo con setCategories de useState
    // const handleAdd = () =>{
    //     setCategories([...categories, 'Hunter X Hunter']); //añadir una nueva
    //  // setCategories(...cats =>[ ...cats, 'Hunter X Hunter']); //con callback con el estado anterior y el nuevo estado
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories }/>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                        key={category}
                        category={ category}/>
                    ))
                }
            </ol>
        </>
    )
}

