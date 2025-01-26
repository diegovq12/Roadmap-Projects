import { string } from "yargs";

export interface GitHubEvent {
    type: string;
    repo: { name: string };
    payload: {
        issue?: { title: string };
        commits?: { message: string }[];
    };
}