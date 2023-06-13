import Post from '../model/Post';

interface PostUseCase {
    FindAll(): Promise<Post[]>;
}

export default PostUseCase;