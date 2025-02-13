export function Button() {
    const GetPosts = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(datas => {
            let posts = datas.map(( item, index ) => {
                return item.title.toUpperCase();
            });
            console.log(posts);
        });
    };
    return <>
        <button onClick={GetPosts}>Pedir Datos en consola</button>
    </>;
}
