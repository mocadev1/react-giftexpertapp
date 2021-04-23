import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Shippuden', 'Darling in the Franxx'];
    const [categories, setCategories] = useState(['Darling in the Franxx']);

    // const handleAdd = ( ) => setCategories( [...categories, 'category'] ); // Mi solución a la tarea
    /** 
     * El setCategories que retorna el useState puede recibir un callback como argumento,
     * a este callback se le pasa como argumento el estado actual del componente
     */
    // const handleAdd = ( ) => setCategories( cats => [...cats, 'category'] );
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp
