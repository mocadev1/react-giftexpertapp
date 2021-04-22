import React, { useState } from 'react'
import AddCategory from './components/AddCategory';

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Shippuden', 'Darling in the Franxx'];
    const [categories, setCategories] = useState(['One Punch', 'Shippuden', 'Darling in the Franxx']);

    // const handleAdd = ( ) => setCategories( [...categories, 'category'] ); // Mi solución a la tarea
    /** 
     * El setCategories que retorna el useState puede recibir un callback como argumento,
     * a este callback se le pasa como argumento el estado actual del componente
     */
    // const handleAdd = ( ) => setCategories( cats => [...cats, 'category'] );
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr/>

            <ol>
                {
                    categories.map( category => {
                        return <li key={category}> { category } </li>;
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp
