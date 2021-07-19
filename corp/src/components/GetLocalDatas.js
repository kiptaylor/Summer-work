import React from 'react';


const GetLocalDatas = ({data}) => {
    // return(
    // <div >
    //    {console.log(JSON.stringify(data))}
    // </div>
    // )
    return (
        <div id='big-box'>
            {data.orderHeader.map((po) => {
            return (
                <div key= {po.id}>
                    <div>ID: {po.id}</div>
                    <div>Title: {po.title}</div>
                    <div>Body: {po.body}</div>
                    <hr />
                </div>
            )
        })}
        </div>
    )

}
  
  export default GetLocalDatas;
