import axios from 'axios'
import React,{useEffect,useState} from 'react'
// import { useLocation } from 'react-router-dom';
import DoctorCard from '../../Components/DoctorCard'

const DoctorsListPage = () => {
    // const location = useLocation();
    // const query=new URLSearchParams(location.search)
    const [items,setItems] = useState()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/doctors?cityId=${process.env.REACT_APP_CITY}`)
            .then((response => {
                // console.log(response)
                setItems(response.data.payload)
            }));

    }, [])

    return(
        <div className="row">
        { items?.map(item => <DoctorCard key={item?.id} item={item} />)}
        </div>
    )
}

export default DoctorsListPage
