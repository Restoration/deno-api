import Post from 'domain/model/Post'

export abstract default class IPostRepository {
	async FindAll():Promise<Post>
}
