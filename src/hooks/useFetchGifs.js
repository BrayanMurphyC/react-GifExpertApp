import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
   const [state, setState] = useState({
       data: [],
       loading: true
   });

   useEffect( () => {
    getGifs( category )
    .then( imgs => {

        setTimeout( () => {

            // dispara una rnderizacion en el componenete GifFrid
            setState({
                data: imgs,
                loading: false 
            })
        }, 3000);
    });  
   }, [category])


    // // useEffect es para que se ejecuta una sola vez el componente
    // useEffect(() => {
    //     getGifs( category ).then(setImages);       
    // }, [ category ]) 

   return state;
}
