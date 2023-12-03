import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { FormUsersProps } from "./interfaces/FormUsers"
import { InfoApi } from "../hooks/interfaces/useFetch.interfaces"

const FormUsers: React.FC<FormUsersProps> = ({createUser,infoUpdate,updateUser,setInfoUpdate,formTitle,isOpenForm,setIsOpenForm}) => {
    const {register,handleSubmit, reset} = useForm<InfoApi>()
   
    useEffect(()=>{
      reset(infoUpdate? infoUpdate : undefined)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[infoUpdate])

    const submit: SubmitHandler<InfoApi> = (data: InfoApi)=>{
      if(infoUpdate){
        updateUser('/users',infoUpdate.id,data)
        setInfoUpdate(infoUpdate)
      }else{
        createUser('/users',data)
      }
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      })
      setIsOpenForm('hidden')
    }

    const handleClose = ()=>{
      setIsOpenForm('hidden')
      setInfoUpdate(null)
      reset({
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
      })
    }
  return (
    <div className={`flex justify-center fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 ${isOpenForm}`}>
      <div className="flex flex-col items-center absolute top-1/2 transform -translate-y-1/2 max-w-sm w-11/12 pb-4 bg-white rounded-xl ">
        <h2 className="text-4xl mt-2 ">{formTitle}</h2>
        <button onClick={handleClose} className="bg-transparent border border-none absolute  top-1 right-2  ease-in duration-300 hover:text-red-600"><i className='bx bx-x text-2xl'></i></button>
        <form onSubmit={handleSubmit(submit)} className="w-11/12">
        <div className="flex flex-col m-2">
          <label htmlFor="first_name" className="m-1 font-medium">First name</label>
          <input {...register('first_name')} type="text" id="first_name" className="p-1 rounded-md border border-solid border-gray-400 max-w-sm bg-sky-200  bg-opacity-10" required />
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="last_name" className="m-1 font-medium">Last name</label>
          <input {...register('last_name')} type="text" id="last_name" className="p-1 rounded-md border border-solid border-gray-400 max-w-sm bg-sky-200  bg-opacity-10" required />
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="email" className="m-1 font-medium">Email</label>
          <input {...register('email')} type="email" id="email" className="p-1 rounded-md border border-solid border-gray-400 max-w-sm bg-sky-200 bg-opacity-10" required/>
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="birthday" className="m-1 font-medium">Birthday</label>
          <input {...register('birthday')} type="date" id="birthday" className="p-1 rounded-md border border-solid border-gray-400 max-w-sm bg-sky-200 bg-opacity-10" required/>
        </div>
        <div className="flex flex-col m-2">
          <label htmlFor="password" className="m-1 font-medium">Password</label>
          <input {...register('password')} type="password" id="password" className="p-1 rounded-md border  border-solid border-gray-400 max-w-sm bg-cyan-200  bg-opacity-10" required />
        </div>
        <div className="flex justify-center w-full">
          <button className="w-11/12 px-2 py-1.5 mt-2 rounded-md border border-none bg-slate-900 text-white ease-in duration-300 hover:bg-slate-950">{infoUpdate? 'Update':'Create'}</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default FormUsers