import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private repo: Repository<Post>) {}
  create(createPostDto: CreatePostDto) {
    return this.repo.save(createPostDto);
  }

  async findAll(_end: any = 10, _start: any = 0) {
    const take = _end;
    const skip = _start;
    const [data, total] = await this.repo.findAndCount({
      take: take,
      skip: skip,
    });
    return data;
  }

  async findCount() {
    const [data, length] = await this.repo.findAndCount();
    return length;
  }

  findOne(id: number) {
    return this.repo.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.repo.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.repo.delete(id);
  }
}
