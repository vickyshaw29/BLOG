import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  NotFoundException,
  Response,
  Request,
  UseInterceptors,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Response as Res, Request as Req } from 'express';
import { RateLimitInterceptor } from 'src/interceptors/api-interceptor';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @UseInterceptors(new RateLimitInterceptor())
  @Get()
  async findAll(@Response() res: Res, @Request() req: Req) {
    const { _start, _end } = req.query;
    let val = await this.postsService.findCount();
    return res
      .set({ 'X-Total-Count': val })
      .send(await this.postsService.findAll(_end, _start));
  }

  @UseInterceptors(new RateLimitInterceptor())
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const post = await this.postsService.findOne(+id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    return post;
  }

  @UseInterceptors(new RateLimitInterceptor())
  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    const post = await this.findOne(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    await this.postsService.update(+id, updatePostDto);
    return {
      msg: 'Post updated successfully',
    };
  }

  @UseInterceptors(new RateLimitInterceptor())
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const post = await this.findOne(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    await this.postsService.remove(+id);
    return {
      msg: 'Post deleted successfully',
    };
  }
}
