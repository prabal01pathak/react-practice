import React from "react";

export default function loginForm({ onSubmit, usernameRef, passwordRef }) {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username" name="username" ref={usernameRef} />
                <input type="password" placeholder="password" name="password" ref={passwordRef} />
                <button onClick={onSubmit}>Sign In</button>
            </form>
        </>
    )
}