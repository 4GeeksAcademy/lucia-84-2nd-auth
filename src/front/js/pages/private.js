import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = props => {
	const { actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
        const validateToken = async () => {
            const isValid = await actions.private();
            if (!isValid) {
                navigate("/login");
            }
        };
        validateToken();
    }, []);

	return (
        <div>
            <h1>Contenido Privado</h1>
            <h2 className="mb-4">Welcome back</h2>
        </div>
    );
};