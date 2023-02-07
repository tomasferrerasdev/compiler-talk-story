import slugify from 'slugify';
import { z } from 'zod';
import { writeFormSchema } from '../../../pages/new-post';
import { protectedProcedure, router, publicProcedure } from '../trpc';

export const postRouter = router({
  createPost: protectedProcedure
    .input(writeFormSchema)
    .mutation(
      async ({
        ctx: { prisma, session },
        input: { title, description, text },
      }) => {
        console.log(session.user);
        await prisma.post.create({
          data: {
            title,
            description,
            text,
            slug: slugify(title),
            author: {
              connect: {
                id: session.user.id,
              },
            },
          },
        });
      }
    ),

  getPosts: publicProcedure.query(async ({ ctx: { prisma } }) => {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        author: {
          select: {
            name: true,
            image: true,
          },
        },
      },
    });
    return posts;
  }),

  getPost: publicProcedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ ctx: { prisma }, input: { slug } }) => {
      const post = await prisma.post.findUnique({
        where: {
          slug,
        },
        include: {
          author: {
            select: {
              name: true,
              image: true,
            },
          },
        },
      });
      return post;
    }),
});
