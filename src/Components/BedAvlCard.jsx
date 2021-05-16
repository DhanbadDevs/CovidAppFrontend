import React from 'react'

const BedAvlCard=(props)=>{
    if(props.count===undefined){
        return(<div></div>);
    }
    const colours=['#d9534f','#f0ad4e','#5cb85c']

        const avlCount=parseFloat(props.count?.split('/')[0]);
        const totalCount=parseFloat(props.count?.split('/')[1]);
        const percentAvl=avlCount/totalCount;
    
    
    return(

        <div className="p-2 col-6">
            <p className="text-center" style={{fontSize:"12px",fontWeight:"bold",textDecoration:"underline",marginBottom:"8px"}}>{props.type}</p>
            <div className="d-flex justify-content-center align-self-center">
                <div className="col-4 avl-bed-count " style={{ backgroundColor:percentAvl>.3?colours[2]:(percentAvl>0?colours[1]:colours[0])}}>
                    {avlCount}
                </div>
                <span style={{fontWeight:"bold",fontSize:"16px",textAlign:"center",padding:"0 0px 2px 4px"}}>/</span>
                <div className="col-4 tot-bed-count" >
                    {totalCount}
                </div>
            </div>
        </div>

    )

}

export default BedAvlCard