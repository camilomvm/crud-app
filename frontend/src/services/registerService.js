const registerService = async (data) => {
    try {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        };

        let res = await fetch(import.meta.env.VITE_URL_REGISTER, options);

         await res.json();
        return { status: res.status, message:"Usuario creado" };

    } catch (error) {
        console.error("Error en el servicio de login:", error);
        return { status: 500, message: "Internal Server Error" };
    }
};

export default registerService;
