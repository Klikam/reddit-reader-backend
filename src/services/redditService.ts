import { getRedditFeed } from '../clients/redditClient.ts';
import Parser, { type Item, type Output } from 'rss-to-js';

const TEST_REACT_RSS = 'r/react/.rss';

const parseXml = async (rssFeed: string): Promise<Item[]> => {
  const data = await getRedditFeed(TEST_REACT_RSS);
  const rssParser = new Parser();
  const parsedFeed = await rssParser.parseString(rssFeed);
  return parsedFeed.items ?? [];
};

export async function getSubredditPosts(subreddit: string): Promise<Item[]> {
  const xmlFeed = await getRedditFeed(subreddit);
  return parseXml(xmlFeed);
}
