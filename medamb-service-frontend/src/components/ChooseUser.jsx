import { useNavigate } from "react-router-dom";

export default function ChooseUser() {
    const navigate = useNavigate();
    return (
        // <div>
        //     <Link to='/login'> User login</Link>
        //     <Link to='/admin'> Admin login</Link>
        // </div>

        <div className="d-flex justify-content-center align-items-center vh-100 loginPage">
            <div className="p-3 rounded w-25 border loginForm">
                <h2 className="text-center">Login As</h2>
                <div className="d-flex justify-content-between mt-5 mb-2">
                    <button type="button" className="btn btn-primary" onClick={() => { navigate('/login') }}>
                        User
                    </button>
                    <button type="button" className="btn btn-success" onClick={() => { navigate('/admin') }}>
                        Admin
                    </button>
                </div>
            </div>
        </div>
    )
}
