import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import AmbulanceCard from '../../Components/AmbulanceCard';
import BedCard from '../../Components/BedCard'
const AmbulanceListPage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/ambulance')
             .then((response=>{
                 console.log(response)
                 setItems(response.data.payload)
             }))
    },[])
    return(
        <div>
       { items?.map(item=><AmbulanceCard item={{...item,phone:'1234567890,8097651243'}} />)}
        </div>
    )
}

export default AmbulanceListPage