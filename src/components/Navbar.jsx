import { Link } from "react-router-dom";

const Navbar = () => {
    return (     
        <nav className="flex w-full px-10 py-4 border-b-2 justify-evenly border-sky-900">
            <Link to="/hello-world" className="text-xl text-sky-900">Exercise 1</Link>
            <Link to="/capture-user-clicks" className="text-xl text-sky-900">Exercise 2</Link>
            <Link to="/custom-component" className="text-xl text-sky-900">Exercise 3</Link>
            <Link to="/counter" className="text-xl text-sky-900">Exercise 4</Link>
            <Link to="/imperative-animal-list" className="text-xl text-sky-900">Exercise 5</Link>
            <Link to="/animal-list" className="text-xl text-sky-900">Exercise 6</Link>
            <Link to="/form" className="text-xl text-sky-900">Exercise 7</Link>
            <Link to="/jokes" className="text-xl text-sky-900">Exercise 8</Link>
        </nav>
    );
}

export default Navbar;