export const getUserService = async (token) => {
    try {
        let options = {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };

        let res = await fetch(import.meta.env.VITE_URL_FIND_USER_BY_ID, options);


        let json = await res.json();
        return { status: res.status, data: json };

    } catch (error) {
        console.error("Error en el servicio de login:", error);
        return { status: 500, message: "Internal Server Error" };
    }
};

export default getUserService;
