import React, { useEffect,useContext } from 'react'
import { FaCodepen,FaStore,FaUserFriends,FaUsers } from "react-icons/fa";
import {Link  } from "react-router-dom";
import GithubContext from '../../context/github/GithubContext'
import {useParams} from 'react-router-dom'
import Spinner from '../layout/spinner'

function User() {
    const{user, searchUser,loading} = useContext(GithubContext)

    const params = useParams()

    useEffect(() => {
        searchUser(params.login)
    }, [])

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = user

    if(loading){
        return <Spinner />
    }
    else{
        return <>
         <div className='text-white'>Hi!</div>
        </>
      
    }
   
    
}

export default User
