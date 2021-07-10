import React from 'react';


const BigBox = ({text}) => {
    return (
        // <div>{JSON.stringify(text)}</div>

        text.map((data) => {
            return (
                <>
                    <div>ID: {data.id}</div>
                    <div>Title: {data.title}</div>
                    <div>Body: {data.body}</div>
                    <hr />
                </>
            )
        })
        )
}
  
  export default BigBox;