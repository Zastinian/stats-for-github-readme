const computeThisYearCommits = (contributions: { contributionCalendar: { totalContributions: any } }) => {
  return contributions.contributionCalendar.totalContributions;
};

const computeThisMonthCommits = (contributions: { contributionCalendar: { months: string | any[]; weeks: string | any[] } }) => {
  const monthLength = contributions.contributionCalendar.months.length - 1;

  let monthWeeks = contributions.contributionCalendar.months[monthLength].totalWeeks;
  let weeksLength = contributions.contributionCalendar.weeks.length - 1;
  let collectTotalCommits = 0;

  do {
    const weekDays = contributions.contributionCalendar.weeks[weeksLength].contributionDays;
    const weekDaysLength = weekDays.length - 1;

    for (let x = 0; x <= weekDaysLength; x++) {
      collectTotalCommits += weekDays[x].contributionCount;
    }

    weeksLength--;
    monthWeeks--;
  } while (monthWeeks > 0);

  return collectTotalCommits;
};

const computeThisWeekCommits = (contributions: { contributionCalendar: { weeks: string | any[] } }) => {
  const weeksLength = contributions.contributionCalendar.weeks.length - 1;
  const weekDays = contributions.contributionCalendar.weeks[weeksLength].contributionDays;
  const weekDaysLength = weekDays.length - 1;

  let collectTotalCommits = 0;

  for (let x = 0; x <= weekDaysLength; x++) {
    collectTotalCommits += weekDays[x].contributionCount;
  }

  return collectTotalCommits;
};

const ComputeContributions = (contributions: any) => {
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
