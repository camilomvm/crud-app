export const FIND_USER_BY_USERNAME_QUERY = `SELECT id, nombre as name, apellido as lastname, contraseña as password, usuario as username, rol_id FROM usuarios WHERE usuario = $1`

export const FIND_USER_BY_ID_QUERY = `
SELECT U.id,nombre, apellido, usuario, rol_id, R.rol FROM usuarios U 
INNER JOIN roles R ON U.rol_id = R.id
WHERE U.id = $1
`
export const REGISTER_USER_QUERY = `
    INSERT INTO usuarios (nombre,apellido,usuario,contraseña,rol_id) values ($1,$2,$3,$4,$5);
`