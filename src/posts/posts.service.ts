import { Injectable, NotFoundException } from '@nestjs/common';
import { ResponseDto } from 'src/common/dto/base-response';
import { posts } from './data/post';
import { Post } from './models/post.models';

@Injectable()
export class PostsService {
  async getAll(): Promise<ResponseDto<{ posts: Post[] }>> {
    try {
      return {
        message: 'Get all posts successfully',
        data: {
          posts,
        },
      };
    } catch (error) {
      throw error;
    }
  }

  async getOne(id: number): Promise<ResponseDto<{ post: Post }>> {
    try {
      const post = posts.find((post) => post.id == id);
      if (!post) {
        throw new NotFoundException('post not found');
      }
      return {
        message: 'Get post successfully',
        data: {
          post: post,
        },
      };
    } catch (error) {
      throw error;
    }
  }
}
