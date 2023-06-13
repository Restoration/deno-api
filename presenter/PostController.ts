
class PostController {
	constructor(private readonly postUseCase: PostUseCase){}
	public async FindAll(){
		return await postUseCase.FindAll().then(r => r)
	}
}

