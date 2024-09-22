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

	calculateRating() {
		const totalScore = this.calculateTotalScore();
		const rank = this.calculateRank(totalScore);
		const progress = this.calculateProgress(totalScore);

		return { rank, progress };
	}

	private calculateTotalScore() {
		const commitScore = this.calculateCommitScore();
		const prScore = this.pullRequests * 5;
		const issueScore = this.issues * 3;
		const reviewScore = this.codeReviews * 2;

		return commitScore + prScore + issueScore + reviewScore;
	}

	private calculateCommitScore() {
		const weekWeight = 1.5;
		const monthWeight = 1.2;
		const yearWeight = 1.1;
		const allTimeWeight = 1.0;

		return (
			this.commitsThisWeek * weekWeight +
			this.commitsThisMonth * monthWeight +
			this.commitsThisYear * yearWeight +
			this.allCommits * allTimeWeight
		);
	}

	private calculateRank(totalScore: number): string {
		const ranks = [
			{ min: 1000, rank: "S++" },
			{ min: 800, rank: "S+" },
			{ min: 600, rank: "S" },
			{ min: 500, rank: "A++" },
			{ min: 400, rank: "A+" },
			{ min: 300, rank: "A" },
			{ min: 250, rank: "B++" },
			{ min: 200, rank: "B+" },
			{ min: 150, rank: "B" },
			{ min: 100, rank: "C++" },
			{ min: 80, rank: "C+" },
			{ min: 60, rank: "C" },
			{ min: 40, rank: "D++" },
			{ min: 20, rank: "D+" },
			{ min: 0, rank: "D" },
		];

		for (const { min, rank } of ranks) {
			if (totalScore >= min) return rank;
		}

		return "D";
	}

	private calculateProgress(totalScore: number): number {
		const currentRank = this.calculateRank(totalScore);
		const nextRank = this.getNextRank(currentRank);

		if (nextRank === currentRank) return 100;

		const currentMin = this.getRankMinScore(currentRank);
		const nextMin = this.getRankMinScore(nextRank);
		const rangeSize = nextMin - currentMin;

		const progress = ((totalScore - currentMin) / rangeSize) * 100;
		return Math.min(Math.max(progress, 0), 100);
	}

	private getNextRank(currentRank: string): string {
		const ranks = [
			"D",
			"D+",
			"D++",
			"C",
			"C+",
			"C++",
			"B",
			"B+",
			"B++",
			"A",
			"A+",
			"A++",
			"S",
			"S+",
			"S++",
		];
		const currentIndex = ranks.indexOf(currentRank);
		return currentIndex < ranks.length - 1
			? ranks[currentIndex + 1]
			: currentRank;
	}

	private getRankMinScore(rank: string): number {
		const rankScores = {
			D: 0,
			"D+": 20,
			"D++": 40,
			C: 60,
			"C+": 80,
			"C++": 100,
			B: 150,
			"B+": 200,
			"B++": 250,
			A: 300,
			"A+": 400,
			"A++": 500,
			S: 600,
			"S+": 800,
			"S++": 1000,
		};
		return rankScores[rank as keyof typeof rankScores] || 0;
	}
}

export default ContributionRatings;
