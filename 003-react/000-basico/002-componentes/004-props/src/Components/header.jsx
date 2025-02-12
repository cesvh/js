export function Header(props){
    console.log(props);
    return <>
        <h1>{ props.title }</h1>
        <p>{ props.description }</p>
    </>;
}
