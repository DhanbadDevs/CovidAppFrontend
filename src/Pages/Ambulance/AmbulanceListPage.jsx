import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import AmbulanceCard from '../../Components/AmbulanceCard';
const AmbulanceListPage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/ambulance?cityId=5')
             .then((response=>{
                 console.log(response)
                 setItems(response.data.payload)
             }))
    },[])
    return(
        <div className="row">
       { items?.map(item=><AmbulanceCard item={item} />)}
        </div>
    )
}

export default AmbulanceListPage