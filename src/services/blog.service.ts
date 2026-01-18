import { env } from "@/env"


export const blogService={
    getBlogPosts:async function (){
        try {
            const res=await fetch(`${env.API_URL}/posts`);
            const data=await res.json();
            return {data:data, error:null}
        } catch (error) {
            return {data:null,error}
        }
    }
}