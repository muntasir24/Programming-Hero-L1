import axios from "axios";
import { useEffect, useState } from "react"

const useAppData = () => {
    const [Error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [appData, setAppData] = useState([]);
    useEffect(() => {
        axios("../appdata.json").then(data => setAppData(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false));
    }, [])
    
    return { loading, Error, appData };

}
export default useAppData;