import React, {useState} from 'react'

const AddCategory = () => {

    // Para poder escribir en el input usamos useState
    const [inputValue, setInputValue] = useState('Hola Mundo')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    // 
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h1>{inputValue}</h1>
            <input
            type="text"
            value = { inputValue }
            onChange = { handleInputChange}
            />            
            
        </form>
    )
}

export default AddCategory
