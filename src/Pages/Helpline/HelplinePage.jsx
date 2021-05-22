import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import axios from 'axios'
import HelplineCard from '../../Components/HellplineCard';
const HelplinePage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/master/helplines?cityId=5')
             .then((response=>{
                 console.log(response)
                 setItems(response.data.payload)
             }))
    },[])
    return (
        <div className='py-3 row'>
            {
                items?.map(item=><HelplineCard item={item} />)
            }
        </div>
    )
}


export default HelplinePage