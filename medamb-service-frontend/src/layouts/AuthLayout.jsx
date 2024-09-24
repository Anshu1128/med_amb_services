import { Outlet } from "react-router-dom"

function AuthLayout() {
    return (
        <div>
            {/* <p>authlayout</p> */}
            <main><Outlet /></main>
        </div>
    )
}

export default AuthLayout
