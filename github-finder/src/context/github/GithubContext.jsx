import { createContext,useState } from "react";

const GithubContext = createContext()

const githubUrl = process.env.REACT_APP_GITHUB_URL
const githubToken = process.env.REACT_APP_GITHUB_TOKEN

export const GithubProvider = ({children}) =>{

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchUsers = async () => 
    {
        const response = await fetch(`${githubUrl}/users`, 
        {
            headers: {
                Authorization:`token ${githubToken}`,
            },
        })
    
        const data = await response.json();

        setUsers(data)
        setLoading(false)
    
    }

    return <GithubContext.Provider 
            value={{users,
                loading,
                fetchUsers}}
            >
                {children}
            </GithubContext.Provider>

}

export default GithubContext