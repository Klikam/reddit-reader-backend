const BASE_URL = 'https://www.reddit.com/';

const handleResponse = (res: Response): Promise<string> => {
  if (!res.ok)
    throw new Error(
      `Error calling ${res.url}: ${res.status} ${res.statusText}`,
    );
  return res.text();
};

export const getRedditFeed = async (subreddit: string): Promise<string> => {
  const res = await fetch(BASE_URL + subreddit);
  return handleResponse(res);
};
