import React from 'react'
import {useEffect, useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/spinner'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    const{users,loading,fetchUsers} = useContext(GithubContext)

    useEffect(() => {
        fetchUsers()
    },[]);

    if(loading){
        return <Spinner />
    }
    else
    {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItem key={user.Id} user= {user}/>
                    
            ))}
            </div>
        )
    }
}

export default UserResults
