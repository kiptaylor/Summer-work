import React, { isValidElement, useState } from 'react';
import './HeroPage.css'
import BigBox from './BigBox';
import IntegerInput from '../Input';
import logo from './logo.png';

<img src={logo} height={100} width={100} />

const Search = () => {
    const [data, setData] = React.useState(null)
    const [value, setValue] = useState(0);
    const buttonOnClick = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8080/api/skeleton/po?po-number=${value}`)
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
                <img className='logo' src={logo} alt=""/>
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