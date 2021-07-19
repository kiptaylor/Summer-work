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
                    <div>Part Name:{po.orderLines.orderLine[0].description}</div>
                    <div>Source Part Number:{po.orderLines.orderLine[0].sourcePartNum}</div>
                    <div>How Many Ordered: {po.orderLines.orderLine[0].quantity}</div>
                    
                    <hr />
                </div>
            )
        })}
        </div>
    )

}
  
  export default GetLocalDatas;
