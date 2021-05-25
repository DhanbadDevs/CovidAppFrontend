import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import HelplineCard from '../../Components/HellplineCard';
const HelplinePage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/master/helplines?cityId=${process.env.REACT_APP_CITY}`)
             .then((response=>{
                 console.log(response)
                 setItems(response.data.payload)
             }))
    },[])
    return (
        <div className='row align-items-lg-stretch'>
            {
                items?.map(item=><HelplineCard item={item} />)
            }
        </div>
    )
}


export default HelplinePage