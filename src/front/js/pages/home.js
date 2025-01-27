import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate(); // Initialize useNavigate

	useEffect(() => {
		actions.login();
	}, []);

	const handlePrivateAreaAccess = () => {
		actions.private();
		navigate("/private"); // Redirect to /private
	};

	return (
		<div className="text-center mt-5">
			<h1>Welcome to Your Secure Portal</h1>
			<p>
				<img 
					src="https://images.unsplash.com/photo-1556740772-1a741367b93e?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
					alt="Welcome" 
					className="img-small" 
				/>
			</p>
			<div className="alert alert-info">
				{store.message || "Fetching your personalized experience... Please ensure your backend server is active."}
			</div>
			<button className="btn btn-primary" onClick={handlePrivateAreaAccess}>
				Access Private Area
			</button>
		</div>
	);
};