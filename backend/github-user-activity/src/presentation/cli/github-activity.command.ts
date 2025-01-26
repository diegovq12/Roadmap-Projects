import { FetchActivityUseCase } from "../../domain/use-cases/fetch-activity.use-case";
import { GitHubApiService } from "../../infrastructure/github/github-api.service";

const githubService = new GitHubApiService();
const fetchActivityUseCase = new FetchActivityUseCase(githubService);


export const executeGithubCommand = async (username:string) => {
        try {
            const activity = await fetchActivityUseCase.execute(username);
            if(activity.length === 0){
                console.log(`No recent activity found for user: ${username}`);
            }else{
                activity.forEach(event=>{
                    console.log(`Performed ${event.type} on ${event.repo.name}`)
                })
            }
        }catch(error){
            throw new Error(`An error ocurred: ${error}`);
        }
};