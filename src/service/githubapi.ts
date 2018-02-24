import * as request from 'request';
import {User} from '../model/user';
import {Repo} from '../model/repo';

const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GitHubApiService {

    getUserInfo(userName: string, callback: (user: User) => any){
        request.get(`https://api.github.com/users/${userName}`, OPTIONS, (error: any, res: any, body: any) => {
            let user: User = new User(body);
            callback(user);
        });
    }

    getRepos(userName: string, callback: (repoArray: Repo[]) => any){
        request.get(`https://api.github.com/users/${userName}/repos`, OPTIONS, (error: any, res: any, body: any) => {
            let repoArray: Repo[] = body.map((repo: any) => new Repo(repo));
            callback(repoArray);
        });
    }
}