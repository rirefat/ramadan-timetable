import { useEffect, useState } from "react"

const useDoa =()=>{
    const [doa, setDoa]=useState([]);
    useEffect(()=>{
        fetch('doa.json')
            .then(res=>res.json())
            .then(data=>setDoa(data))
    },[]);

    return [doa, setDoa];
}

export default useDoa;