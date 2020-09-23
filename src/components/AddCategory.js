import React, {useState} from 'react';
import PropTypes from 'prop-types';


// SetCategories recibimos el prop desde el padre GifExperteApp
const AddCategory = ( { setCategories } ) => {

    // Para poder escribir en el input usamos useState
    const [inputValue, setInputValue] = useState('');

    // Para añadir con enter 
    const handleInputChange = (e) => {
        setInputValue(e.target.value);      
    }

    // Para agregar a la lista
    const handleSubmit = (e) => {
        e.preventDefault(); //con el envio no se recarge
        // console.log( {'Submit hecho'} );
        if (inputValue.trim().length > 2) {            
            setCategories( cats => [...cats, inputValue]);
            setInputValue('');
        }

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

// Para que utilice el componente con la funcion que se necesita
AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}
