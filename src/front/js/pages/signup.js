import React, { useState } from "react";
import "../../styles/signup.css"; // Ensure to include your CSS file

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://bookish-fiesta-4jgppw9xpvp5cq44g-3001.app.github.dev//register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error("Error al crear usuario");
            }

            const data = await response.json();
            window.location.href = "/login";
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="signup-container">
            <h1>Registro</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} className="signup-form">
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label>Contraseña:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="signup-button">Registrar</button>
            </form>
        </div>
    );
};