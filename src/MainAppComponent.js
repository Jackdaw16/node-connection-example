import React, {useEffect, useState} from 'react';

export const MainAppComponent = () => {

    const [employed, setEmployed] = useState([]);

    useEffect( () => {
       getEmployed();
    }, []);

    const getEmployed = async () => {
        const url = "http://localhost:6969/api/employed/2";
        const response = await fetch(url);
        const data = await response.json();

        const employed = data.map( employed => {
            return {
                id: employed.id,
                name: employed.name,
                salary: employed.salary
            }
        });

        console.log(employed);
        setEmployed(employed);
    };

    return (
        <>
            {
                employed.map( (item, i) => (
                    <div className="container">
                        <h2 key={ i }>{ item.name }</h2>
                        <h3 key={ i }>Salario: { item.salary }</h3>
                    </div>
                ))
            }

        </>
    );
};
