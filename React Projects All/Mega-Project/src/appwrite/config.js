import conf from "../conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Config {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl);
        this.client.setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slag, content, futuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slag,
                {
                    title, content, futuredImage, status, userId,
                }

            )
        } catch (error) {
            console.log(`This is create post error ${error}`);

        }
    }

    async updatePost(slag, { title, content, futuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slag,
                { title, content, futuredImage, status, userId }
            )
        } catch (error) {
            console.log(`This is update post error ${error}`);
        }
    }

    async deletePost(slag) {
        try {
            this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slag
            )
            return true;
        } catch (error) {
            console.log(`This is delete post error ${error}`);
            return false;
        }
    }

    async getPost(slag) {
        try {
            this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slag
            )
        } catch (error) {
            console.log(`This is get post error ${error}`);
            return false;
        }
    }

    async getPosts(queryes = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queryes
            )
        } catch (error) {
            console.log(`This is get posts error ${error}`);
        }
    }

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(`This is uploading file error ${error}`);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log(`This is delete file error ${error}`);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const config = new Config();

export default config;