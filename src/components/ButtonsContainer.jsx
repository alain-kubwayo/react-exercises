import buttonsData from "../shareable/buttons";
import { useState, useEffect } from "react";
import CustomButton from "./buttons/CustomButton";

const ButtonsContainer = () => {
    const [buttonsDetails, setButtonsDetails] = useState(buttonsData);

    const handleButtonClick = (id) => {
        alert(`You clicked on Button ${id}`);
    }

    return ( 
        <div className="flex justify-between w-full mx-auto mt-10 md:w-1/2">
            {buttonsDetails?.map(detail => (
                <CustomButton
                    {...detail}
                    handleButtonClick={handleButtonClick}
                    key={detail.id}
                />))
            }
        </div>
    );
}
 
export default ButtonsContainer;