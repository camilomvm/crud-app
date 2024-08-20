const loginService = async (username, password) => {
    try {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        };

        let res = await fetch(import.meta.env.VITE_URL_LOGIN, options);

        if (!res.ok) {
            if (res.status === 401) {
                return { status: 401, message: "Invalid credentials" };
            }
            if (res.status === 404) {
                return { status: 404, message: "User not found" };
            }
            return { status: res.status, message: "An error occurred" };
        }

        let json = await res.json();
        return { status: res.status, data: json };

    } catch (error) {
        console.error("Error en el servicio de login:", error);
        return { status: 500, message: "Internal Server Error" };
    }
};

export default loginService;
