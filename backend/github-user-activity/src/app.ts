import { executeGithubCommand } from '../src/presentation/cli/github-activity.command';
import { yarg } from './config/plugin/args.plugin';

const main = async () => {
    try {
        const username = yarg.name as string;
        await executeGithubCommand(username);
        console.log('GitHub activity command executed successfully.');
    } catch (error) {
        console.error('Error executing GitHub activity command:', error);
    }
};

// npx ts-node src/app.ts -n <nombre>

main();

