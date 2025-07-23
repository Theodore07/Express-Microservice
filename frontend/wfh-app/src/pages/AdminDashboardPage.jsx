import Navbar from "../components/Navbar"
import UserTable from "../components/UserTable"

const DashboardPage = () => {
    return(
        <>
            <Navbar />
            <h1 className="text-3xl font-bold p-10">Admin Dashboard</h1>
            <div>
                <UserTable />
            </div>
        </>
    )
}

export default DashboardPage