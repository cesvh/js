async function getPosts() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts_json = await posts.json();
    console.log(posts_json);
}

getPosts();

/*

PS C:\Users\cesvh\dev\github\js\node\010-fetch\001-fetch>
PS C:\Users\cesvh\dev\github\js\node\010-fetch\001-fetch>
PS C:\Users\cesvh\dev\github\js\node\010-fetch\001-fetch> node .\index.js
[
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto'
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\n' +
      'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
      'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
      'qui aperiam non debitis possimus qui neque nisi nulla'
  },
  {
    userId: 1,
    ...
    ...
    ...
    PS C:\Users\cesvh\dev\github\js\node\010-fetch\001-fetch>
    PS C:\Users\cesvh\dev\github\js\node\010-fetch\001-fetch>

*/
