
import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UserCard from './components/UserCard'
import { InfoApi } from './hooks/interfaces/useFetch.interfaces'

function App() {
  const [infoUpdate, setInfoUpdate] = useState<InfoApi |null>(null)
  const baseUrl:string = 'https://users-crud.academlo.tech'
  const {infoApi:users, getApi:getUsers, postApi:createUser, deleteApi:deleteUser, updateApi:updateUser} = useFetch(baseUrl)
  const [isOpenForm, setIsOpenForm] = useState<string>('hidden')
  
  useEffect(()=>{ 
    getUsers('/users')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleOpen = ()=>{
    setIsOpenForm('')
  }
  return (
    <div className='min-h-screen bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(../background.gif)` }}>
      <header className=' grid justify-center text-center sm:px-8 sm:flex sm:justify-between'>
        <h1 className='text-4xl mt-8 text-red-300'>Users</h1>  
        <div>
          <button onClick={handleOpen} className="btn--create_user bg-blue-950 text-white p-2 border-none rounded-md mt-8 ease-in duration-300 hover:bg-green-800"><i className='bx bx-plus text-white'></i> Create new user</button>
        </div>
      </header>
      <FormUsers
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        isOpenForm={isOpenForm}
        setIsOpenForm={setIsOpenForm}
        formTitle={infoUpdate? 'Update user':'New user'}
      />
      <div className='flex justify-center flex-wrap mt-8'>
        {
          users?.map(user=>(
            <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              setIsOpenForm={setIsOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
