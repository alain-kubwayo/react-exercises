import { useState } from "react";

const Counter = () => {
    
    const [count, setCount] = useState(0);
    
    return ( 
        <div className="flex flex-col w-full mx-auto md:w-1/2">
            <p className="py-4 font-semibold text-md text-sky-900">Button has been clicked: {count} times</p>
            <button
                className="px-4 py-2 text-white bg-sky-900 round-md w-fit"
                onClick={() => setCount(prevCount => prevCount + 1)}
            >Click Me</button>
        </div>
    );
}
 
export default Counter;