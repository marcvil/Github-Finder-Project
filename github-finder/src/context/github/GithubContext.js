import { createContext,useReducer} from "react";
import githubReducer from './GithubReducer'

const GithubContext = createContext()

const githubUrl = process.env.REACT_APP_GITHUB_URL
const githubToken = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{

   const initialState = {
        users: [],
        loading: false
   }

   const [state,dispatch] = useReducer(githubReducer,initialState)

 
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
                searchUsers,
                clearUsers
            }}
            >
                {children}
            </GithubContext.Provider>

}

export default GithubContext