import { Injectable } from "https://deno.land/x/inject/mod.ts";
import IPostRepository from '../domain/repository/PostRepository.ts'
import Post from '../domain/model/Post.ts'

@Injectable()
class PostInteractor {
	constructor(private readonly repository: IPostRepository) {}
	public async FindAll(): Promise<Post[]>{
		return await this.repository.FindAll()
	}
}

export default PostInteractor;