import { useState } from 'react';
import { Addcategory, GifGrid } from './components';

const keyGif = "GDUFK9oF576ocTnO2yZ1114o24zptYyd";
export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState([ 'Dragon Ball Super' ]);

    const onAddCategory = ( newCategory ) => {

        if (categories.includes(newCategory)) return;

        // setCategories( cat => [...cat, 'Valorant'] );
        setCategories([ newCategory, ...categories ]);
    };

    return (
        <>
        <h1>GifExpertApp</h1>

        <Addcategory 
            onNewCategory={ (value) => onAddCategory(value) }
        />

        { categories.map( (category) => (
                <GifGrid 
                    key={ category }
                    category={ category }
                />
            )) 
        }
        </>
    );
};
