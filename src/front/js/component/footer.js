import React from "react";
import "../../styles/footer.css"; // Ensure to include your CSS file

export const Footer = () => (
	<footer className="footer">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="http://www.4geeksacademy.com" className="footer-link">4Geeks Academy</a>
		</p>
	</footer>
);