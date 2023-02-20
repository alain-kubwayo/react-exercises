import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="flex w-full px-10 py-4 border-b-2 justify-evenly border-sky-900">
            <Link to="/capture-user-clicks" className="text-xl text-sky-900">Exercise 2</Link>
        </nav>
    );
}
 
export default Navbar;