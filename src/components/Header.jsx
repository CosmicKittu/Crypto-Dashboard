import {Link} from "react-router";


const Header = () => {
    return ( 
        <div className="flex justify-end gap-4 mb-4">
            <Link to='/' className="text-[#58a6ff] hover:text-[#4090db] no-underline font-bold transition-colors duration-200 ease-in-out">Home</Link>
            <Link to='/about' className="text-[#58a6ff] hover:text-[#4090db] no-underline font-bold transition-colors duration-200 ease-in-out">About</Link>
        </div>
     );
}
 
export default Header;