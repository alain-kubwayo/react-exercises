const AlertButton = () => {
    const handleClick = () => {
        alert("Clicked!");
    }
    return (
        <div className="flex justify-center mt-10">
            <button 
                className="flex px-4 py-2 border border-sky-900" 
                onClick={handleClick}
            >
                Click Me
            </button>
        </div> 
     );
}
 
export default AlertButton;