interface ContributionDay {
  contributionCount: number;
}

interface Week {
  contributionDays: ContributionDay[];
}

interface Month {
  totalWeeks: number;
}

interface ContributionCalendar {
  totalContributions: number;
  months: Month[];
  weeks: Week[];
}

interface Contributions {
  contributionCalendar: ContributionCalendar;
  totalPullRequestContributions: number;
  totalIssueContributions: number;
  totalPullRequestReviewContributions: number;
}

const computeThisYearCommits = (contributions: Contributions): number => {
  return contributions.contributionCalendar.totalContributions;
};

const computeThisMonthCommits = (contributions: Contributions): number => {
  const months = contributions.contributionCalendar.months;
  const weeks = contributions.contributionCalendar.weeks;
  const monthLength = months.length - 1;

  let monthWeeks = months[monthLength].totalWeeks;
  let weeksLength = weeks.length - 1;
  let collectTotalCommits = 0;

  while (monthWeeks > 0) {
    const weekDays = weeks[weeksLength].contributionDays;
    for (const day of weekDays) {
      collectTotalCommits += day.contributionCount;
    }
    weeksLength--;
    monthWeeks--;
  }

  return collectTotalCommits;
};

const computeThisWeekCommits = (contributions: Contributions): number => {
  const weeks = contributions.contributionCalendar.weeks;
  const weeksLength = weeks.length - 1;
  const weekDays = weeks[weeksLength].contributionDays;

  return weekDays.reduce((total, day) => {
    return total + day.contributionCount;
  }, 0);
};

const ComputeContributions = (contributions: Contributions) => {
  return {
    thisYear: computeThisYearCommits(contributions),
    thisMonth: computeThisMonthCommits(contributions),
    thisWeek: computeThisWeekCommits(contributions),
    pullRequests: contributions.totalPullRequestContributions,
    issues: contributions.totalIssueContributions,
    codeReviews: contributions.totalPullRequestReviewContributions,
  };
};

export default ComputeContributions;
