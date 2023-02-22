const animals = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

const Animals = () => {
    return ( 
        <div className="w-full pt-10 mx-auto md:w-1/2">
            <ul>
                {animals.map((animal, index) => <li key={index}>{animal}</li>)}
            </ul>
        </div>
     );
}
 
export default Animals;