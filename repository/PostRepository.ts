import Post from '../domain/model/Post';
import IPostRepository from '../domain/repository/PostRepository'

class PostRepository implements IPostRepository {
  public async FindAll(): Promise<Post[]>{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(() => { throw Error()});
    return result.map((v) => v as Post)
  }
}

export default PostRepository;