import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import OxygenCard from '../../Components/OxygenCard';


const OxygenListPage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/oxygen?cityId=5')
             .then((response=>{
                 console.log(response.data.payload)
                 setItems(response.data.payload)
             }))
    },[])
    return(
        <div className='row '>
       { items?.map(item=><OxygenCard item={{...item}} />)}
        </div>
    )
}

export default OxygenListPage