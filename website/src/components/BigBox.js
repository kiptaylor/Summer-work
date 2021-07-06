import React from 'react';


const GetLocalDatas = ({text}) => {

    return (
        <div id='big-box'>
            {text.map((data) => {
            return (
                <>
                    <div>ID: {data.id}</div>
                    <div>Title: {data.title}</div>
                    <div>Body: {data.body}</div>
                    <hr />
                </>
            )
        })}
        </div>
    )
}
  
  export default GetLocalDatas;