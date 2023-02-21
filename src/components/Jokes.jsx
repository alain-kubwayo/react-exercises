import Joke from "./Joke";
import jokes from "../shareable/jokes";
import { useState } from "react";

const Jokes = () => {
    const [allJokes, setAllJokes] = useState(jokes);

    return ( 
        <div className="grid max-w-2xl grid-cols-1 gap-20 pt-10 mx-auto md:grid-cols-2">
            {allJokes.map(joke => <Joke {...joke} key={joke.id} />)}
        </div>
    );
}
 
export default Jokes;