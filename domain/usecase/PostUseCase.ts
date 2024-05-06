import Post from '../model/Post.ts';

interface PostUseCase {
    FindAll(): Promise<Post[]>;
}

export default PostUseCase;