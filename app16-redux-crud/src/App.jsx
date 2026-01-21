import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { useEffect } from 'react';
import { getAllUsersAsyncAction } from './store/userSlice';

function App() {
  // const {users} = useSelector((state)=>{
  //   return state.usersDetails
  // })
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.usersDetails);

  console.log(users);
  useEffect(() => {
    dispatch(getAllUsersAsyncAction())
  }, [])
  return (
    <>
      <h2>React Redux CRUD Demo</h2>
      <ul>
        {users.map((user)=> <li key={user.id}>
{user.email}
        </li> )}
      </ul>
    </>
  )
}

export default App
