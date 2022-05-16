import { auth } from "./auth";

export const getAllPosts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
        'content-type': 'application/json',
        method: 'GET',
    });
    const { posts } = await response.json();
    return posts;
}
export const createPosts = async (data) => {
    const user = auth.currentUser();
    await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            Authorization: `Bearer ${user.token.access_token}`
        }
    });
}