function Footer({ endPhrase, author = 'Unknown' }){
    return <>
        <p>{ endPhrase }</p>
        <p>Escrito por: { author }</p>
    </>;
}

export default Footer;
