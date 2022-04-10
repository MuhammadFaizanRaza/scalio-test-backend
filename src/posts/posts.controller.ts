import { Controller, Get, Param } from '@nestjs/common';
import { ResponseDto } from 'src/common/dto/base-response';
import { IDParamDto } from './dto/post.dto';
import { Post } from './models/post.models';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('/')
  getAll(): Promise<ResponseDto<{ posts: Post[] }>> {
    return this.postsService.getAll();
  }

  @Get('/:id')
  getOne(@Param() { id }: IDParamDto): Promise<ResponseDto<{ post: Post }>> {
    return this.postsService.getOne(id);
  }
}
