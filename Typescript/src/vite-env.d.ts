/// <reference types="vite/client" />
interface UserData {
    id?: string ,
    email: string,
    name:string,
    password:string,
    profilePic: File | string | null;
    // Define the structure of your user data
}