import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import MedEquipCard from '../../Components/MedEqipCard'
const MedEquipsListPage=()=>{
    const location = useLocation();
	const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/medicines/medicalshops?cityId=${process.env.REACT_APP_CITY}&medicineEquippmentId=${query.get('id')}`)
             .then((response=>{
                 console.log(response)
                 setItems(response.data.payload)
             }))
    },[])
    return(
        <div  className="row ">
       { items?.map(item=><MedEquipCard item={item} />)}
        </div>
    )
}

export default MedEquipsListPage