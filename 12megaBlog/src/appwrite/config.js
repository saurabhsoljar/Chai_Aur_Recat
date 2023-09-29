import conf from "../conf/conf";
import {Client, ID, Databases, Storage, Query} from "appwrite";

export class Serive{
    Client = new Client();
    Databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setEndpoint(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
    }

    async creaePost ({title,slug, content,featuredImage, status, userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        }catch(error){
            console.log("Appwrite serive :: createPost :: error", error);
        }
    }

    async updatePost({slug, title, content,featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwitr serive :: updatePost :: error", error);
        }
    }

    async deletePost(){}
}

const serive = new Serive()

export default serive

