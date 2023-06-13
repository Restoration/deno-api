import { Injectable } from "https://deno.land/x/inject/mod.ts";

import IPostRepository from 'domain/repository/PostRepository'
import Post from 'domain/model/Post'

@Injectable()
class PostUseCase {
	constructor(private readonly repository: IPostRepository) {}
	public async FindAll(): Promise<Post[]>{
		repository.FindAll()
	}
}
