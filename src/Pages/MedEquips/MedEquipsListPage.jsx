import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import MedEquipCard from '../../Components/MedEqipCard'
const MedEquipsListPage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get(`http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/medicines/medicalshops?cityId=5&medicineEquippmentId=${query.get('id')}`)
             .then((response=>{
                 console.log(response)
                 setItems(response.data.payload)
             }))
    },[])
    return(
        <div>
       { items?.map(item=><MedEquipCard item={item} />)}
        </div>
    )
}

export default MedEquipsListPage