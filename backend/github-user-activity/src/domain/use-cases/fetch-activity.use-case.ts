import { GitHubEvent } from "../entities/github-event";
import { GitHubApiService } from "../../infrastructure/github/github-api.service";

export class FetchActivityUseCase {
    constructor(private githubService: GitHubApiService) { }

    async execute(username: string): Promise<GitHubEvent[]> {
        return this.githubService.fetchUserActivity(username);
    }
}