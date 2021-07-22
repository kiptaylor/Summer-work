import React, { isValidElement, useState } from 'react';
import './HeroPage.css'
import BigBox from './BigBox';
import IntegerInput from '../Input';
import logo from './logo.png';
import { render } from '@testing-library/react';



const Search = () => {

    const [data, setData] = React.useState(null)
    const [value, setValue] = useState(0);
    const [err, setError] = useState(false);
    const buttonOnClick = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8080/api/coupa_reinjection/po?po-number=${value}`)
            .then(response => response.json())
            .then((result) => {
                setData(result)
            }) .catch(responseError => 
                setError(responseError))
                // err = responseError
            }
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <header>
                <img className='logo' src={logo} alt=""/>
                </header >
                {
                    err !== false ? 
                    <div>
                        Error is found
                    </div>
                 : null
                    }
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

                {data !== null && data !== undefined && <BigBox data={data} />}

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
