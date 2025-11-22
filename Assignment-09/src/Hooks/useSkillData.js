import axios from "axios";
import { useEffect, useState } from "react";





const useSkillData=()=>{
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
    const [skillData,setSkillData]=useState([]);
    useEffect(()=>{
        axios('/skilldata.json').then(data=>setSkillData(data.data))
        .catch(err=>setError(err))
        .finally(()=>setLoading(false));
    },[])
    return {error,loading,skillData}
}

export default useSkillData;