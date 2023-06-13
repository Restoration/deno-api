import Post from '../model/Post'

interface IPostRepository {
	FindAll(): Promise<Post[]> 
}

export default IPostRepository;