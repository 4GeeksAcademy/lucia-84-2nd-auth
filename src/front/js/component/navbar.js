import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css"; // Ensure to include your CSS file

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    actions.logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          Inicio
        </Link>
        <div className="navbar-links">
          {!store.token ? (
            <>
              <Link to="/signup" className="nav-button">
                Registro
              </Link>
              <Link to="/login" className="nav-button">
                Login
              </Link>
            </>
          ) : (
            <button onClick={handleLogout} className="nav-button logout-button">
              Cerrar Sesión
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};