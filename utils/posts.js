// utils/api.js

export const fetchPosts = async () => {
    try {
        const res = await fetch("http://localhost:8080/posts"); // Replace with your backend URL
        const posts = await res.json();
        return posts;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};
