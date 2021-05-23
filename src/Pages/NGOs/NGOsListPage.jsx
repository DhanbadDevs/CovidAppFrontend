import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import BedCard from '../../Components/BedCard'
const NGOsListPage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/hospitalbeds?bedType=Oxygen%20Beds&cityId=${process.env.REACT_APP_CITY}`)
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