import {
  Router,
  type NextFunction,
  type Request,
  type Response,
} from 'express';
import { getSubredditPosts } from '../services/redditService.js';

const router: Router = Router();

router.get(
  '/:subreddit',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { subreddit } = req.params;

      if (!subreddit || Array.isArray(subreddit)) {
        res.status(400).json({ error: 'Subreddit parameter is required' });
        return;
      }

      const posts = await getSubredditPosts(subreddit);
      res.json(posts);
    } catch (err) {
      next(err);
    }
  },
);

export default router;
