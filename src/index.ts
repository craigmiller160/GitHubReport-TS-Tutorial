import {GitHubApiService} from './service/githubapi';
import {User} from './model/user';
import * as _ from 'lodash';
import {Repo} from './model/repo';

//Dev Name: koushikkothagal

if(process.argv.length < 3){
    console.log('Please pass the user name as an argument');
}
else{
    let userName = process.argv[2];
    let svc = new GitHubApiService();
    svc.getUserInfo(userName, (user: User) => {
        svc.getRepos(userName, (repoArray: Repo[]) => {
            let sortedRepos = _.sortBy(repoArray, (repo: Repo) => repo.forkCount * -1);
            user.repos = _.take(sortedRepos, 5);
            console.log(user);
        });
    });
}