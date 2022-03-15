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


    //Set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return <GithubContext.Provider 
            value={{
                users: state.users,
                loading: state.loading,
                fetchUsers
            }}
            >
                {children}
            </GithubContext.Provider>

}

export default GithubContext