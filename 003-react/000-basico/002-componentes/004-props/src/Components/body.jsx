export default function Body(props){
    let { firstParagraph, whatIs, uses, examples, datoNumero, datoBool, datoArray, datoObjeto, myFunction } = props;
    console.log(myFunction)
    return <>
        <h4>{ firstParagraph }</h4>
        <p>{ whatIs }</p>
        <p>{ uses }</p>
        <p>{ examples }</p>
        <p>{ datoNumero }</p>
        <p>{ datoBool }</p>
        <p>{ datoArray }</p>
        <p>{ JSON.stringify(datoObjeto) }</p>
        <br />
    </>;
}
