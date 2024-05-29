import getToken from "./getToken";

type RepositoryData = {
  stars: number;
  forks: number;
  openedIssues: number;
};

type Repository = {
  stargazers_count: number;
  forks_count: number;
  open_issues: number;
};

export default async function repositoryFetch(username: string, totalpage: number, token: string): Promise<RepositoryData> {
  let stars = 0;
  let forks = 0;
  let openedIssues = 0;

  const pagesData = await Promise.all(
    Array.from({ length: totalpage }, (_, i) => getPerPageReposData(username, i + 1, token))
  );

  for (const pageData of pagesData) {
    for (const repo of pageData) {
      stars += repo.stars;
      forks += repo.forks;
      openedIssues += repo.openedIssues;
    }
  }

  return {
    stars,
    forks,
    openedIssues,
  };
}

async function getPerPageReposData(username: string, pageno: number, token: string): Promise<RepositoryData[]> {
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

  const data: Repository[] = await response.json();

  const reposData: RepositoryData[] = data.map(repo => ({
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    openedIssues: repo.open_issues,
  }));

  return reposData;
}
