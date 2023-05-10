import React from "react";

export default function LoginForm({ onSubmit, usernameRef, passwordRef }) {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="username" name="username" ref={usernameRef} /><br />
                <input type="password" placeholder="password" name="password" ref={passwordRef} /><br />
                <button onClick={onSubmit}>Sign In</button>
            </form>
        </>
    )
}