const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction


			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			// Sign up a new user
			signup: async (email, password) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "/api/register", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({email, password })
					});
					if (!resp.ok) throw new Error("Error en el registro");

					const data = await resp.json();
					window.location.href = "/login";
				} catch (err) {
					setError(err.message);
				}
			},

			// Log in an existing user
			login: async (email, password) => {
				try {
					const resp = await fetch("https://bookish-fiesta-4jgppw9xpvp5cq44g-3001.app.github.dev/login", {
						method: "POST",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify({ email, password }),
					});
					if (!resp.ok) throw new Error("Error when Login");

					const data = await resp.json();
					localStorage.setItem("token", data.token);
					setStore({ token: data.token });
				} catch (error) {
					console.error("Error logging in:", error);
					throw error;
				}
			},

			logout: () => {
				localStorage.removeItem("token");
				setStore({ token: null });
			},

			// Fetch private data
			private: async () => {
				try {
					const token = localStorage.getItem("token");
					if (!token) return false;

					const resp = await fetch("https://bookish-fiesta-4jgppw9xpvp5cq44g-3001.app.github.dev//private", {
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"Authorization": "Bearer " + token,
						},
					});
					if (!resp.ok) return false;

					const data = await resp.json();
					return true;
				} catch (error) {
					console.error("Error validando token:", error);
					return false;
				}
			}
		}
	};
};

export default getState;
