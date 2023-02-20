import animals from "../shareable/animals";
import { useState } from "react";
import Animal from "./Animal";

const AnimalsList = () => {
    const [allAnimals, setAllAnimals] = useState(animals);
    return ( 
        <ul className="w-full pt-10 mx-auto md:w-1/4">
            {allAnimals.map((animal, index) => (
                <Animal 
                    key={index} 
                    animal={animal} 
                />))
            }
        </ul>
     );
}
 
export default AnimalsList;