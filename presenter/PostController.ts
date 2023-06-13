import IPostUseCase from '../domain/usecase/PostUseCase'

class PostController {
	constructor(private readonly postUseCase: IPostUseCase){}
	public async FindAll(){
		return await this.postUseCase.FindAll().then(r => r)
	}
}

export default PostController;
