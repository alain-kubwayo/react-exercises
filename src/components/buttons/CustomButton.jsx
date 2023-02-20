const CustomBottom = ({ description, id, handleButtonClick }) => {
    return ( 
        <button 
            className="px-4 py-2 border-2 border-sky-900"
            onClick={ () => handleButtonClick(id) }
        >
            {description}
        </button>
    );
}
 
export default CustomBottom;