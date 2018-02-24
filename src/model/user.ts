import {Repo} from './repo';

export class User {
    login: string;
    fullName: string;
    repoCount: number;
    followerCount: number;
    repos?: Repo[];

    constructor(userResponse: any){
        this.login = userResponse.login;
        this.fullName = userResponse.name;
        this.repoCount = userResponse.public_repos;
        this.followerCount = userResponse.followers;
    }
}