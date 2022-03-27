import { createContext,useReducer} from "react";
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const githubUrl = process.env.REACT_APP_GITHUB_URL
const githubToken = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{

   const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
   }

   const [state,dispatch] = useReducer(githubReducer,initialState)

 const searchUser = async (login) =>{
     setLoading()

     
    const response = await fetch(`${githubUrl}/users/${login}`, 
    {
        headers: {
            Authorization:`token ${githubToken}`,
        },
    })

  
    if(response.status === 404){
        window.location = '/notfound'
    }
    else{
        const item = await response.json();

        dispatch(
            {
                type: "GET_USER",
                payload: item
            }
        )
    }
   
 
    
 }
 const getUserRepos = async (login) => 
    {
        setLoading()
        const params = new URLSearchParams(
            {
                sort: 'created',
                per_page: 10
            }
        )
        const response = await fetch(`${githubUrl}/users/${login}/repos?${params}`, 
        {
            headers: {
                Authorization:`token ${githubToken}`,
            },
        })
    
        const data = await response.json();

        dispatch(
            {
                type: "GET_REPOS",
                payload: data
            }
        )

    
    }

   const searchUsers = async (text) => 
    {
        setLoading()

        const params = new URLSearchParams(
            {
                q: text
            }
        )
        const response = await fetch(`${githubUrl}/search/users?${params}`, 
        {
            headers: {
                Authorization:`token ${githubToken}`,
            },
        })
    
        const {items} = await response.json();

        dispatch(
            {
                type: "GET_USERS",
                payload: items
            }
        )

    
    }
   //Testing Cases
    const fetchUsers = async () => 
    {
        setLoading()
        const response = await fetch(`${githubUrl}/users`, 
        {
            headers: {
                Authorization:`token ${githubToken}`,
            },
        })
    
        const data = await response.json();

        dispatch(
            {
                type: "GET_USERS",
                payload: data
            }
        )

    
    }

    const clearUsers = () => 
    {
        dispatch(
            {
                type: "CLEAR_USERS"
            }
        )

    
    }


    //Set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider 
            value={{
                users: state.users,
                loading: state.loading,
                user: state.user,
                repos : state.repos,
                searchUsers,
                searchUser,
                clearUsers,
                getUserRepos
            }}
            >
                {children}
            </GithubContext.Provider>

}

export default GithubContext