import yargs, { hide, option } from 'yargs';
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
.scriptName('github-activity')    
.option('n', {
        alias: 'name',
        type: 'string',
        demandOption: true,
        describe: 'Name of the account'
    })
    .check((argv, option)=>{
        if (argv.n.length === 0) throw new Error('Error: must introduce a github account name');
    
        return true;
    })
    .parseSync();