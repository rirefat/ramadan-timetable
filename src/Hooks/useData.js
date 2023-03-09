import { useEffect, useState } from "react";

const useData =()=>{
    const [scheduleData, setScheduleData]=useState([]);
    useEffect(()=>{
        fetch('data.json')
            .then(res=>res.json())
            .then(data=>setScheduleData(data));
    },[]);

    return [scheduleData, setScheduleData];
}

export default useData;