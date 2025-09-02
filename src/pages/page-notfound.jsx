import { Link } from "react-router";
const NotFound = () => {
    return ( 
        <div className="text-center p-20 px-5 text-white">
            <h1 className="text-[72px] mb-5">404</h1>
            <p className="text-lg mb-[30px]">Oops! the page not Found</p>
            <Link className="no-underline text-[#007bff] font-bold" to='/'>Go Back Home</Link>
        </div>
     );
}

 
export default NotFound;