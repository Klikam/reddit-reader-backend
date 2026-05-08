const BASE_URL = 'https://www.reddit.com/';

const handleResponse = (res: Response): Promise<string> => {
  if (!res.ok)
    throw new Error(
      `Error calling ${res.url}: ${res.status} ${res.statusText}`,
    );
  return res.text();
};

export const getRedditFeed = async (subreddit: string): Promise<string> => {
  const url = BASE_URL + '/r/' + subreddit + '/.rss';
  const res = await fetch(url);
  console.log(`Calling ${url}`);
  return handleResponse(res);
};
