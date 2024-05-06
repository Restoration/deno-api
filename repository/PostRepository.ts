import Post from '../domain/model/Post.ts';
import IPostRepository from '../domain/repository/PostRepository.ts'

class PostRepository implements IPostRepository {
  public async FindAll(): Promise<Post[]>{
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .catch(() => { throw Error()});
    return result.map((v) => v as Post)
  }
}

export default PostRepository;