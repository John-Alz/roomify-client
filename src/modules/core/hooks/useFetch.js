import { useEffect, useState } from "react"
import { api } from "../../../shared/api/apiClient";


export const useFetch = (url) => {

    let [data, setData] = useState([]);

    useEffect(() => {
        let fetchData = async () => {
            const data = await api.get(url)
            setData(data)
        }
        fetchData();
    }, [url])

    return { data }

}