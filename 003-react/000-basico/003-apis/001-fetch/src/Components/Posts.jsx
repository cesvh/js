export function Button() {
    const GetPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datas => console.log(datas));
    };
    return <>
        <button onClick={GetPosts}>Pedir Datos en consola</button>
    </>;
}
