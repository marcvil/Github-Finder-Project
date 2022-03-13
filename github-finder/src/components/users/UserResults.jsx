import React from 'react'
import {useEffect, useState} from 'react'

function UserResults() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchUsers()
    },[]);

    const fetchUsers = async () => 
    {
        const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, 
        {
            headers: {
                Authorization:`token ${process.env.REACT_APP_GITHUB_TOKEN}`,
            },
        })
    
        const data = await response.json();

        setUsers(data)
        setLoading(false)
    
    }
    
    if(loading){
        return <h3> Loadinggggggggg</h3>
    }
    else
    {
        return (
            <div className='grid grid-cols-1'>
                {users.map((user) => (
                
                    <h3>{user.login}</h3>
                    
            ))}
            </div>
        )
    }
}

export default UserResults
