import { auth } from "./auth";

export const getAllPosts = async () => {
    const responseGet = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
        'Content-Type': 'application/json'
    });
    const { posts } = await responseGet.json();
    // console.log(posts)
    return posts;
}
export const createPosts = async (data) => {
    const user = auth.currentUser();
    if (user)
        await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/posts`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Authorization: `Bearer ${user.token.access_token}`
            }
        });
}