import { useEffect,useState } from "react";
import instance from '../api/instance'

const UseFetchData = (ENDPOIND) => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        instance.get(ENDPOIND)
        .then(response => setData(response))
        .catch(err => console.log(err))
    },[])
    return data.data;
}

export default UseFetchData;
