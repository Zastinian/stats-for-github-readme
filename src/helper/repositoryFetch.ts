import getToken from "./getToken";

type RepositoryData = {
  stars: number;
  forks: number;
  openedIssues: number;
};

export default async function repositoryFetch(username: string, totalpage: number, token: string): Promise<RepositoryData> {
  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  await Promise.all(Array.from({ length: totalpage }, (_, i) => getPerPageReposData(username, i + 1, token))).then((data: any) => {
    data.forEach((repo: any) => {
      stars += repo.stars;
      forks += repo.forks;
      openedIssues += repo.openedIssues;
    });
  });

  return {
    stars,
    forks,
    openedIssues,
  };
}

async function getPerPageReposData(username: string, pageno: number, token: string): Promise<object> {
  const response = await fetch(`https://api.github.com/users/${username}/repos?page=${pageno}&per_page=100`, {
    method: "GET",
    headers: {
      "User-Agent": "Zastinian/stats-for-github-readme",
      Authorization: getToken(token),
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch page ${pageno} of repositories`);
  }

  const data = await response.json() as any;

  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  data.forEach((repo: any) => {
    stars += repo.stargazers_count;
    forks += repo.forks_count;
    openedIssues += repo.open_issues;
  });

  return {
    stars,
    forks,
    openedIssues,
  };
}
