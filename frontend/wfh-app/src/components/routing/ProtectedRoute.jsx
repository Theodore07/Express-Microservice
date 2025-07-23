import { useNavigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    if(token === null){
         return navigate('/')
    }
    return children
}

export default ProtectedRoute