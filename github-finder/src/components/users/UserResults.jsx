import React from 'react'
import { useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/spinner'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const{users,loading,fetchUsers} = useContext(GithubContext)

    if(loading){
        return <Spinner />
    }
    else
    {
        return (
            <div>
                <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                    {users.map((user) => (

                        <UserItem user= {user}  key={user.id.toString()} />
                        
                    ))}
                </div>
            </div>
        )
    }
}

export default UserResults
