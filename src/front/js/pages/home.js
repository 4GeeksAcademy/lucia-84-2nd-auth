import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	useEffect(()=>{
		actions.login()
	}, []) 

	return (
		<div className="text-center mt-5">
			<h1>Welcome to your portal</h1>
			<p>
				<img src="https://images.unsplash.com/photo-1496989981497-27d69cdad83e?q=80&w=2841&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
			</p>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<button className="btn btn-success" onClick={()=>{
				actions.private()
			}}>Private Area</button>
			
		</div>
	);
};