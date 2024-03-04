import React, { useState } from 'react';
import Select from 'react-select';

function Hi() {

    const [selectedOptions, setselectedOptions] = useState([]);

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]


    function handleChange(selectedOptions) {
        setselectedOptions(selectedOptions);
    }



    function handleSubmite() {
        console.log(selectedOptions);
    }

    return (
        <div style={{ paddingTop: "300px", paddingBottom: "100px" }}>
            <Select
                isMulti
                name="colors"
                options={options}
                value={selectedOptions}
                onChange={handleChange}
                className="basic-multi-select"
                classNamePrefix="select"
            />



            <button onClick={() => { handleSubmite() }}>submite</button>
        </div>
    )
}


export default Hi;