import React, { isValidElement, useState } from 'react';
import './HeroPage.css'
import BigBox from './BigBox';
import IntegerInput from '../Input';
import logo from './logo.png';
import { render } from '@testing-library/react';
import CircularProgress from '@material-ui/core/CircularProgress';

// import ErrorBox from './ErrorBox'

const Search = () => {

    const [data, setData] = React.useState(null)
    const [value, setValue] = useState(0);
    const [loading , setLoading] = useState(false);
    const [err, setError] = useState(false);
    const SendJde = (event) => {
        event.preventDefault()
        console.log(data.orderHeader[0])
    }
    const buttonOnClick = (event) => {
        event.preventDefault();
        setData(undefined)
        setError(false)
        setLoading(true)
        fetch(`http://localhost:8080/api/coupa_reinjection/po?po-number=${value}`)
            .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else{
                throw new Error('Error Occured')
            }
            })
            .then((result) => {
                setData(result)
                setLoading(false)
            }) .catch(responseError => {
                setError(responseError)
                setLoading(false)

                })
                // err = responseError
            }   
            
    return (
        <form action="/" method="get">
            <label htmlFor="header-search">
                <header>
                <img className='logo' src={logo} alt=""/>
                </header >
                <span className="visually-hidden">Input PO Number: </span>
            </label>
            < IntegerInput value={ value } min={-1} max={999999999} onChange={ (value) => setValue(value) }
            />
            
            <button 
            type="submit" 
            onClick={buttonOnClick}>
                Search
                </button>
            {loading !== false && < div id = "loading-true">
            <CircularProgress />
            </div>
            }
            {err !== false ?  <div id = "error-true">
            Error found please check your PO number , or reload the page. 
            </div> : null}
            <div>
                {data !== null && data !== undefined && <BigBox data={data} />}

            </div>
            <div>
            <button 
                type="submit"
                onClick={SendJde}
                id="JDE"
            >Send to JDE
            </button>
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