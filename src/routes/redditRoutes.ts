import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import { getSubredditPosts } from '../services/redditService.ts';

const router = Router();

router.get(
  '/:subreddit',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const posts = await getSubredditPosts(req.params.subreddit);
      res.json(posts);
    } catch (err) {
      next(err);
    }
  },
);

export default router;
