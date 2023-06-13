

class PostRepository() {
public async FindAll() => {
  return await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json));
}
}
