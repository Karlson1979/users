


import { UserList } from "./components/UserList"
import users from './users.json'
import {SectionUser} from './components/SectionUser'

function App() {
  
  
 
  return (
    <>
    <SectionUser>
    <UserList users={users}/>
    </SectionUser>
    </>
  )
}

export default App
