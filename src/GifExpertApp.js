import React, { useState } from 'react'

const GifExpertApp = () => {
    // const categories = ['One punch', 'Samurai X', 'Dragon Ball', 'One Piece']
    const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball', 'One Piece']);

    const handleAdd = () =>{
        setCategories([...categories, 'Hunter X Hunter']); //añadir una nueva
     // setCategories(...cats =>[ ...cats, 'Hunter X Hunter']);
    }


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr/>
            <button onClick={ handleAdd }>Agregar</button>
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
