import React, { isValidElement, useState } from 'react';
import './App.css'
import BigBox from './components/BigBox';
import IntegerInput from './Input'


const Search = () => {
    const [data, setData] = React.useState(null)
    const [value, setValue] = useState(0);
    const buttonOnClick = (event) => {
        event.preventDefault();
        fetch(`https://servicemaster-test.coupahost.com/api/purchase_orders?po-number=${value}`)
            .then(response => response.json())
            .then((result) => {
                setData(result)
            }).catch((error) => {
                console.log('error occurred: ', error)
            })
    }

    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <header>
                    Terminix
                </header>
                <span className="visually-hidden">Input PO Number: </span>
            </label>
            < IntegerInput value={ value } min={-1} max={999999999} onChange={ (value) => setValue(value) }
            />
            <button 
            type="submit" 
            onClick={buttonOnClick}>
                Search
                </button>
            <div>

                {data !== null && <BigBox text={data} />}

            </div>
            <button
                type="submit"
                id="JDE"
            >Send to JDE
            </button>
            <div>
                <input

                    id="success-box"
                    type="text-area"
                >
                </input>
            </div>
        </form>
    )
};

export default Search;