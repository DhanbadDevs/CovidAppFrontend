import axios from 'axios'
import React,{useEffect,useState} from 'react'
// import { useLocation } from 'react-router-dom';
import DoctorCard from '../../Components/DoctorCard'

const DoctorsListPage = () => {
    // const location = useLocation();
    // const query=new URLSearchParams(location.search)
    const [items,setItems] = useState()

    useEffect(() => {
        axios.get('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/doctors?cityId=5')
            .then((response => {
                console.log(response)
                setItems(response.data.payload)
            }));

    }, [])

    return(
        <div>
        { items?.map(item => <DoctorCard key={item?.id} item={item} />)}
        </div>
    )
}

export default DoctorsListPage
