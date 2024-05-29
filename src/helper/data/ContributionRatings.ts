class ContributionRatings {
  private allCommits: number;
  private commitsThisYear: number;
  private commitsThisMonth: number;
  private commitsThisWeek: number;
  private pullRequests: number;
  private issues: number;
  private codeReviews: number;

  constructor() {
    this.allCommits = 0;
    this.commitsThisYear = 0;
    this.commitsThisMonth = 0;
    this.commitsThisWeek = 0;
    this.pullRequests = 0;
    this.issues = 0;
    this.codeReviews = 0;
  }

  setAllCommits(commits: number) {
    this.allCommits = commits;
  }

  setCommitsThisYear(commits: number) {
    this.commitsThisYear = commits;
  }

  setCommitsThisMonth(commits: number) {
    this.commitsThisMonth = commits;
  }

  setCommitsThisWeek(commits: number) {
    this.commitsThisWeek = commits;
  }

  setPullRequests(prs: number) {
    this.pullRequests = prs;
  }

  setIssues(issues: number) {
    this.issues = issues;
  }

  setCodeReviews(reviews: number) {
    this.codeReviews = reviews;
  }

  calculateRating() {
    const totalCommits = this.calculateTotalCommits();
    const rank = this.calculateRank(totalCommits);
    const progress = this.calculateProgress(rank);

    return { rank, progress };
  }

  private calculateTotalCommits() {
    return this.allCommits + this.commitsThisYear + this.commitsThisMonth + this.commitsThisWeek;
  }

  private calculateRank(totalCommits: number) {
    const baseScore = this.pullRequests * 3 + this.issues * 2 + this.codeReviews * 1.5 + totalCommits * 0.02;

    const rankPoints = baseScore * this.getRankModifier();
    return this.getRankFromPoints(rankPoints);
  }

  private getRankModifier() {
    const baseModifier = 1.0;
    const commitsThisYearModifier = 0.8;
    const commitsThisMonthModifier = 0.8;
    const commitsThisWeekModifier = 0.9;
    const allCommitsModifier = 0.65;

    return baseModifier * commitsThisYearModifier * commitsThisMonthModifier * commitsThisWeekModifier * allCommitsModifier;
  }

  private getRankFromPoints(rankPoints: number): string {
    switch (true) {
      case rankPoints >= 1000:
        return "S++";
      case rankPoints >= 800:
        return "S+";
      case rankPoints >= 600:
        return "S";
      case rankPoints >= 500:
        return "A++";
      case rankPoints >= 400:
        return "A+";
      case rankPoints >= 300:
        return "A";
      case rankPoints >= 250:
        return "B++";
      case rankPoints >= 200:
        return "B+";
      case rankPoints >= 150:
        return "B";
      case rankPoints >= 100:
        return "C++";
      case rankPoints >= 80:
        return "C+";
      case rankPoints >= 60:
        return "C";
      case rankPoints >= 40:
        return "D++";
      case rankPoints >= 20:
        return "D+";
      default:
        return "D";
    }
  }

  private calculateProgress(rank: string) {
    switch (rank) {
      case "S++":
        return 0;
      case "S+":
        return 15;
      case "S":
        return 30;
      case "A++":
        return 45;
      case "A+":
        return 60;
      case "A":
        return 75;
      case "B++":
        return 100;
      case "B+":
        return 115;
      case "B":
        return 130;
      case "C++":
        return 145;
      case "C+":
        return 160;
      case "C":
        return 175;
      case "D++":
        return 190;
      case "D+":
        return 205;
      case "D":
        return 220;
      default:
        return 250;
    }
  }
}

export default ContributionRatings;
