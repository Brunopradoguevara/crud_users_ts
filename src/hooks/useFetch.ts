import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import {UseFetchInterface, InfoApi} from "./interfaces/useFetch.interfaces"

const useFetch = (baseUrl: string): UseFetchInterface  => {
  const [infoApi, setInfoApi] = useState<InfoApi[] | undefined>()
 
    //GET
    const getApi = (path:string):void=>{
     const url = `${baseUrl}${path}/`
      axios.get(url)
       .then((res:AxiosResponse) => {
        setInfoApi(res.data)})
       .catch(err => console.log(err))
    }

    //POST
    const postApi = (path:string,data: InfoApi[]| InfoApi | []):void=>{
     const url = `${baseUrl}${path}/`
     axios.post(url,data)
     .then((res:AxiosResponse<InfoApi[]>) => {
      const newData = Array.isArray(res.data) ? res.data : [res.data];
        setInfoApi((prevInfoApi) => [...(prevInfoApi || []), ...newData]);
      })
     .catch(err => console.log(err))
    }

    //DELETE
    const deleteApi = (path:string,id:number):void=>{
     const url = `${baseUrl}${path}/${id}/`
     axios.delete(url)
     .then(() => setInfoApi((prevInfoApi) => prevInfoApi?.filter((e) => e.id !== id)))
      .catch(err => console.log(err))
     
    }

    //UPDATE
    const updateApi = (path:string,id:number,data: InfoApi ):void=>{
     const url = `${baseUrl}${path}/${id}/`
     axios.put(url,data)
      .then((res:AxiosResponse) => setInfoApi(infoApi?.map(e => e.id === id ? res.data : e)))
      .catch(err => console.log(err))
    }

    return {infoApi, getApi, postApi, deleteApi, updateApi};
}

export default useFetch