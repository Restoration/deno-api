import Post from '../model/Post.ts'

interface IPostRepository {
	FindAll(): Promise<Post[]> 
}

export default IPostRepository;