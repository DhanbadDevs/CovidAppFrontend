import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom';
import DoctorCard from '../../Components/DoctorCard'
const DoctorsListPage=()=>{
    const location = useLocation();
    const query=new URLSearchParams(location.search)
    const [items,setItems]=useState()
    useEffect(()=>{
        // axios.post('http://covidapp-dev.ap-south-1.elasticbeanstalk.com/api/doctors')
        //      .then((response=>{
        //          console.log(response)
        //          setItems(response.data.payload)
        //      }));

    let res = JSON.parse(`{
       "id":0,
       "doctorName":"Ryan L. Eschbaugh",
       "timing":"9pm - 6pm",
       "locationId":0,
       "cityId":0,
       "designation":"General Orthopaedic Surgery Shoulder and Elbow Surgery",
       "medium":"Whatsapp",
       "fees":"200",
       "isVerified":true,
       "mediumLink":"https://web.whatsapp.com",
       "notes":"doctor notes will go here",
       "updatedOn":"2021-05-16T13:51:51.979Z",
       "phone":"+916352627256",
       "votes":0,
       "createdOn":"2021-05-16T13:51:51.979Z",
       "city":{
          "id":0,
          "cityName":"string",
          "state":"string",
          "createdOn":"2021-05-16T13:51:51.979Z",
          "updatedOn":"2021-05-16T13:51:51.979Z"
       },
       "location":{
          "id":0,
          "locationName":"dhanbad",
          "address":"housing colony, Bartand, 828522",
          "isPrivate":true,
          "cityId":0,
          "latitude":"string",
          "longitude":"string",
          "timing":"string",
          "locationTypeId":0,
          "phone":"string",
          "notes":"string",
          "updatedOn":"2021-05-16T13:51:51.979Z",
          "votes":0,
          "createdOn":"2021-05-16T13:51:51.979Z",
          "city":{
             "id":0,
             "cityName":"string",
             "state":"string",
             "createdOn":"2021-05-16T13:51:51.980Z",
             "updatedOn":"2021-05-16T13:51:51.980Z"
          },
          "locationType":{
             "id":0,
             "locationTypeName":"string",
             "createdOn":"2021-05-16T13:51:51.980Z",
             "updatedOn":"2021-05-16T13:51:51.980Z"
          }
       }
    }`);

    let ress =  [res, res, res, res, res];

    console.log(ress);
    setItems(ress);

    },[])
    return(
        <div>
        { items?.map(item=><DoctorCard key={item.id} item={item} />)}
        </div>
    )
}

export default DoctorsListPage
