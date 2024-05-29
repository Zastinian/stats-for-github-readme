import getToken from "./getToken";

export interface User {
  name: string;
  login: string;
  avatarUrl: string;
  repositories: Repositories;
  followers: Followers;
  following: Following;
  contributionsCollection: ContributionsCollection;
  openedIssues: OpenedIssues;
  closedIssues: ClosedIssues;
}

export interface Repositories {
  totalCount: number;
}

export interface Followers {
  totalCount: number;
}

export interface Following {
  totalCount: number;
}

export interface ContributionsCollection {
  totalCommitContributions: number;
  restrictedContributionsCount: number;
  totalIssueContributions: number;
  totalPullRequestContributions: number;
  totalPullRequestReviewContributions: number;
  contributionCalendar: ContributionCalendar;
}

export interface ContributionCalendar {
  totalContributions: number;
  months: Month[];
  weeks: Week[];
}

export interface Month {
  totalWeeks: number;
}

export interface Week {
  firstDay: string;
  contributionDays: ContributionDay[];
}

export interface ContributionDay {
  contributionCount: number;
}

export interface OpenedIssues {
  totalCount: number;
}

export interface ClosedIssues {
  totalCount: number;
}

interface GraphQLResponse {
  data: {
    user: User;
  };
  errors?: { message: string }[];
}

export default async function basicFetch(username: string, token: string): Promise<User> {
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      "User-Agent": "Zastinian/stats-for-github-readme",
      Authorization: getToken(token),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `query userInfo($username: String!) {
        user(login: $username) {
          name
          login
          avatarUrl
          repositories(ownerAffiliations: OWNER, privacy: PUBLIC) {
            totalCount
          }
          followers {
            totalCount
          }
          following {
            totalCount
          }
          contributionsCollection {
            totalCommitContributions
            restrictedContributionsCount
            totalIssueContributions
            totalPullRequestContributions
            totalPullRequestReviewContributions
            contributionCalendar {
              totalContributions
              months {
                totalWeeks
              }
              weeks {
                firstDay
                contributionDays {
                  contributionCount
                }
              }
            }
          }
          openedIssues: issues(states: OPEN) {
            totalCount
          }
          closedIssues: issues(states: CLOSED) {
            totalCount
          }
        }
      }`,
      variables: { username },
    }),
  });

  const data: GraphQLResponse = await response.json();
  if (data.errors && data.errors.length > 0) {
    throw new Error(data.errors[0].message);
  }

  return data.data.user;
}
