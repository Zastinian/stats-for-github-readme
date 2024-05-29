import { millify } from "millify";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import { Buffer } from "buffer";
import basicFetch, { type User } from "./basicFetch";
import repositoryFetch from "./repositoryFetch";

export type GetData = {
  username: string;
  name: string;
  pic: string | Buffer;
  public_repos: string | number;
  followers: string | number;
  following: string | number;
  total_stars: string | number;
  total_forks: string | number;
  total_issues: string | number;
  total_closed_issues: string | number;
  total_contributions: string | number;
  all_data: User;
};

async function getData(username: string, token: string): Promise<GetData> {
  const user = await basicFetch(username, token);
  const totalRepoPages = Math.ceil(user.repositories.totalCount / 100);
  const userRepositories = await repositoryFetch(username, totalRepoPages, token);

  if (!user.name) user.name = user.login;

  const response = await fetch(`${user.avatarUrl}&s=200`, {
    headers: {
      "User-Agent": "Zastinian/stats-for-github-readme",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch image");
  }

  const arrayBuffer = await response.arrayBuffer();
  const base64Image = Buffer.from(arrayBuffer).toString("base64");
  const imageUrl = `data:image/jpeg;base64,${base64Image}`;

  const output: GetData = {
    username: user.login,
    name: user.name,
    pic: imageUrl,
    public_repos: millify(user.repositories.totalCount),
    followers: millify(user.followers.totalCount),
    following: millify(user.following.totalCount),
    total_stars: millify(userRepositories.stars),
    total_forks: millify(userRepositories.forks),
    total_issues: millify(user.openedIssues.totalCount + user.closedIssues.totalCount),
    total_closed_issues: millify(user.closedIssues.totalCount),
    total_contributions: millify(user.contributionsCollection.restrictedContributionsCount + user.contributionsCollection.totalCommitContributions),
    all_data: user,
  };

  return output;
}

export default getData;
