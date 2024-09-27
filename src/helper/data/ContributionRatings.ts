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
		return (
			this.allCommits +
			this.commitsThisYear +
			this.commitsThisMonth +
			this.commitsThisWeek
		);
	}

	private calculateRank(totalCommits: number) {
		const baseScore =
			this.pullRequests * 5 +
			this.issues * 3 +
			this.codeReviews * 2.5 +
			totalCommits * 0.1;

		const rankPoints = baseScore * this.getRankModifier();
		return this.getRankFromPoints(rankPoints);
	}

	private getRankModifier() {
		const commitsThisYearModifier = 1.2;
		const commitsThisMonthModifier = 1.4;
		const commitsThisWeekModifier = 1.5;
		const allCommitsModifier = 0.7;

		return (
			commitsThisYearModifier *
			commitsThisMonthModifier *
			commitsThisWeekModifier *
			allCommitsModifier
		);
	}

	private getRankFromPoints(rankPoints: number): string {
		switch (true) {
			case rankPoints >= 1200:
				return "S++";
			case rankPoints >= 1000:
				return "S+";
			case rankPoints >= 800:
				return "S";
			case rankPoints >= 700:
				return "A++";
			case rankPoints >= 600:
				return "A+";
			case rankPoints >= 500:
				return "A";
			case rankPoints >= 400:
				return "B++";
			case rankPoints >= 300:
				return "B+";
			case rankPoints >= 200:
				return "B";
			case rankPoints >= 150:
				return "C++";
			case rankPoints >= 100:
				return "C+";
			case rankPoints >= 80:
				return "C";
			case rankPoints >= 60:
				return "D++";
			case rankPoints >= 40:
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
				return 10;
			case "S":
				return 20;
			case "A++":
				return 30;
			case "A+":
				return 40;
			case "A":
				return 50;
			case "B++":
				return 60;
			case "B+":
				return 70;
			case "B":
				return 80;
			case "C++":
				return 90;
			case "C+":
				return 100;
			case "C":
				return 110;
			case "D++":
				return 120;
			case "D+":
				return 130;
			default:
				return 140;
		}
	}
}

export default ContributionRatings;
