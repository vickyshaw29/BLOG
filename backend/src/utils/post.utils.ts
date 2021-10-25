import { PostsService } from "src/posts/posts.service";

export class Helper {
    constructor(private readonly postsService: PostsService ) {}
  getCount() {
    this.postsService.findAll()
  }
}
