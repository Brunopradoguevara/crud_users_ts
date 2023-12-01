import { UserCardProps } from "./interfaces/UserCard"

const UserCard: React.FC<UserCardProps> = ({user,deleteUser,setInfoUpdate,setIsOpenForm}) => {
    const handleDelete = ()=>{
        deleteUser('/users',user.id)
    }
    const handleEdit = ()=>{
        setInfoUpdate(user)
        setIsOpenForm('')
    }
  return (
    <article className=" border border-gray-500 border-solid rounded-xl flex flex-col max-w-xs w-10/12  m-4 py-1 px-4 bg-violet-400 opacity-90 ease-in duration-300 hover:bg-red-300 ">
      <h3 className="text-2xl text-center border-b border-gray-500 pb-2">{`${user.first_name} ${user.last_name}`}</h3>
      <ul className="flex flex-col">
        <li className="flex flex-col"><span className="text-green-700 capitalize my-2">Email: </span><span className="userCard__value">{user.email}</span></li>
        <li className="flex flex-col"><span className="text-green-700 capitalize my-2">Birthday: </span><span className="userCard__value"><i className='bx bx-gift' ></i> {user.birthday}</span></li>
      </ul>
      <div className="flex justify-end border-t border-solid border-gray-600 py-1 mt-2">
        <button onClick={handleDelete} className="bg-red-700 border border-solid border-red-400 rounded-md py-1 px-2 mr-2 ease-in duration-300 hover:bg-red-800 "><i className='bx bx-trash text-white'></i></button>
        <button onClick={handleEdit} className="border border-solid border-gray-500 rounded-md py-1 px-2 ease-in duration-300 bg-gray-500 hover:bg-gray-600 "><i className='bx bx-pencil text-white'></i></button>
      </div>
    </article>
  )
}

export default UserCard