import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import BedCard from '../../Components/BedCard'
const NGOsListPage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/hospitalbeds?bedType=Oxygen%20Beds&cityId=5')
             .then((response=>{
                 console.log(response)
                 setItems(response.data.payload)
             }))
    },[])
    return(
        <div>
       { items?.map(item=><BedCard item={item} />)}
        </div>
    )
}

export default NGOsListPage