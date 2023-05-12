export default async function CreateUser({ username, password }) {
    const response = await fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    console.log("creating the user: ", response)
    try {

    const data = await response.json();
    return data;
    }catch(e) {
        console.log("error: ", e)
        return {username, password}
    }
};
