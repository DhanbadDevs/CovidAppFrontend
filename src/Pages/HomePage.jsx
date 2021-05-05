import React from 'react'
const HomePage=()=>{
    return(
        <div className="container" style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flex:1}}>
        <div className="row">
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                    <i style={{fontSize:'44px'}} class="fas fa-procedures"></i>
                    <h6>Hospital & Beds</h6>
                </div>
            </div>
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                    <i style={{fontSize:'44px'}} class="fas fa-syringe"></i>
                    <h6>Vaccine</h6>
                </div>
            </div>
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                <i style={{fontSize:'44px'}} class="fas fa-pills"></i>
                    <h6>Medicin & Equipment</h6>
                </div>
            </div>
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                 <i style={{fontSize:'44px'}} class="fas fa-tint"></i>
                    <h6>Blood & Plasma</h6>
                </div>
            </div>
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                <i style={{fontSize:'44px'}} class="fad fa-hands-helping"></i>
                    <h6>NGO</h6>
                </div>
            </div>
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                <i style={{fontSize:'44px'}} class="fad fa-clipboard-list-check"></i>
                    <h6>Guidelines</h6>
                </div>
            </div>
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                <i style={{fontSize:'44px'}} class="fad fa-utensils-alt"></i>
                    <h6>Food</h6>
                </div>
            </div>
            <div className="col-6 p-1">
                <div style={{width: '100%',height:'150px'}} className="=p-1 bg-success">
                <i style={{fontSize:'44px'}} class="fal fa-ellipsis-h-alt"></i>
                    <h6>Other</h6>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomePage
