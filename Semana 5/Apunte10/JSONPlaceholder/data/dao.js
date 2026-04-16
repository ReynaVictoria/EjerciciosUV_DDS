const URL_BASE = "https://jsonplaceholder.typicode.com";

export async function getUsers() {
    const response = await fetch(URL_BASE + "/users");
    return await response.json();
}

export async function getPosts(userId) {
    const response = await fetch(URL_BASE + "/posts?userId=" + userId);
    return await response.json();
}