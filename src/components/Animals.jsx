const ANIMALS = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];

const Animals = () => {
    return ( 
        <div className="w-full pt-10 mx-auto md:w-1/2">
            <ul>
                <li>{ANIMALS[0]}</li>
                <li>{ANIMALS[1]}</li>
                <li>{ANIMALS[2]}</li>
                <li>{ANIMALS[3]}</li>
                <li>{ANIMALS[4]}</li>
                <li>{ANIMALS[5]}</li>
            </ul>
        </div>
     );
}
 
export default Animals;