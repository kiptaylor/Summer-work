import React, { useState, useEffect } from 'react';
import './GetData.css'
// get posts from online api
// it's return a json file

const GetDatas = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [datas, setDatas] = useState([]);

    useEffect(() => {


        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((result) => {
                setIsLoaded(true)
                setError(false)
                setDatas(result)
            }).catch((error) => {
                console.log('error occurred: ', error)
                setIsLoaded(true)
                setError(true)
            })
    }, [])


    if (error) {
        return <div>Error in loading</div>
    }

    if (!isLoaded) {
        return <div>Loading ...</div>
    }

    return (
        <div>
            <ol className="item">
                {
                    datas.map(data => (
                        <li key={data.id} align="start">
                            <div>
                                <p className="title">{data.title}</p>
                                <p className="body">{data.body}</p>
                            </div>
                        </li>
                    ))
                }
            </ol>
        </div>
    )
}

export default GetDatas;