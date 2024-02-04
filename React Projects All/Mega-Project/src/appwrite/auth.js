import config from "../conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl)
            .setProject(config.appwriteProjectId);
        this.account = new Account(this.client);
    }
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(`This is create account error ${error}`);
        }

    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log(`This is account log in error ${error}`);
        }

    }
    async getCurrnetAccount() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(`This is current account error ${error}`);
        }
        return null;
    }
    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log(`This is account log out error ${error}`);
        }
    }
}

const authService = new AuthService();

export default authService;

