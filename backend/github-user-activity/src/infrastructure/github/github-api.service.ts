import axios from "axios";
import { GitHubEvent } from "../../domain/entities/github-event";

export class GitHubApiService{
    async fetchUserActivity(username: string):Promise<GitHubEvent[]>{
        const url = `https://api.github.com/users/${username}/events`;
        const {data} = await axios.get<GitHubEvent[]>(url);
        return data;
    }
}