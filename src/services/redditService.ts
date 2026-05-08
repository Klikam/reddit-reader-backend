import { XMLParser } from 'fast-xml-parser';
import { getRedditFeed } from '../clients/redditClient.ts';
import type { RedditPost } from '../models/reddit.ts';

const TEST_REACT_RSS = 'r/react/.rss';

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  allowBooleanAttributes: true,
  unpairedTags: ['link'],
  stopNodes: ['*.content'],
  processEntities: true,
});

const parseXml = async (xml: string): Promise<RedditPost[]> => {
  const parsedFeed = parser.parse(xml);
  const entries = parsedFeed?.feed?.entry ?? [];

  return entries.map((entry: any) => ({
    id: entry.id,
    title: typeof entry.title === 'object' ? entry.title['#text'] : entry.title,
    link: entry.link?.['@_href'] ?? '',
    published: entry.published,
    author: entry.author?.name ?? '',
  }));
};

export async function getSubredditPosts(
  subreddit: string,
): Promise<RedditPost[]> {
  const xmlFeed = await getRedditFeed(subreddit);
  return parseXml(xmlFeed);
}
