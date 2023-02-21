const Joke = ({ setup, punchline }) => {
    return ( 
        <div className="p-2 text-center bg-white border-2 shadow-2xl border-sky-200">
            <h1 className="text-xl font-bold">{setup}</h1>
            <p>{punchline}</p>
        </div>
    );
}
 
export default Joke;