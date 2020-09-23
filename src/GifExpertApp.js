import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball', 'One Piece']

    // useState es un Hook que te permite añadir el estado de React a un componente funcional
    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball', 'One Piece']);

    // Para añadir el elementro al arreglo con setCategories de useState
    // const handleAdd = () =>{
    //     setCategories([...categories, 'Hunter X Hunter']); //añadir una nueva
    //  // setCategories(...cats =>[ ...cats, 'Hunter X Hunter']); //con callback con el estado anterior y el nuevo estado
    // }


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <AddCategory />
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                { 
                    categories.map(category => {
                        return <li key={ category }> { category } </li>
                    }) 
                }
            </ol>
        </>
    )
}

export default GifExpertApp
