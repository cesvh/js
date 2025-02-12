export function Button ({ value = "OK" }) {
    const HandleEvent = (e) => {
        console.log(e.target.value)
    };

    return <>
        <button onClick={ (e) => { console.log("Hey"); } } >
            { value }
        </button>
        <input id={ value } onChange={ HandleEvent } />
    </>
};
