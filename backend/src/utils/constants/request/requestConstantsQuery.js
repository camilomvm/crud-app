export const GET_ALL_REQUEST_QUERY = `
    SELECT S.id_empleado,S.id,S.codigo,E.nombre,E.fecha_ingreso,E.salario,S.descripcion,S.resumen FROM empleado E
    INNER JOIN SOLICITUD S ON S.id_empleado = E.id
    ORDER BY S.id
    LIMIT $2 OFFSET $1; 
`;

export const FILTER_REQUEST_BY_NAME_QUERY = `
 SELECT S.id_empleado,S.id,S.codigo,E.nombre,E.fecha_ingreso,E.salario,S.descripcion,S.resumen FROM empleado E
      INNER JOIN SOLICITUD S ON S.id_empleado = E.id
      WHERE  E.nombre ILIKE '%' || $1 || '%';
`;

export const INSERT_EMPLOYEE_QUERY = `
   INSERT INTO empleado (fecha_ingreso,nombre,salario) values ($1,$2,$3)
`;

export const EDIT_EMPLOYEE_QUERY = `
   UPDATE empleado set fecha_ingreso = $1, nombre = $2, salario = $3
   WHERE id = $4
`;

export const DELETE_EMPLOYE_QUERY = `
   DELETE FROM empleado where id = $1
`;

export const GET_EMPLOYES_QUERY = `
   SELECT * 
   FROM empleado
   ORDER BY id 
   LIMIT $2 OFFSET $1; 
`;
export const TOTAL_EMPLOYES_QUERY = `
   SELECT COUNT(*) AS totalRecords
   FROM empleado;
`;

export const GET_EMPLOYEE_BY_ID_QUERY = `
   SELECT * FROM empleado WHERE id = $1
`;

export const DELETE_REQUEST_BY_USER_ID_QUERY = `
   DELETE FROM solicitud where id_empleado = $1;
`;

export const DELETE_REQUEST_QUERY = `
   DELETE FROM solicitud where id = $1;
`;

export const CREATE_REQUEST_QUERY = `
    INSERT INTO solicitud (codigo,descripcion,resumen,id_empleado) values ($1,$2,$3,$4)
`;

export const GET_TOTAL_REQUEST = `
      SELECT COUNT(*) AS totalRecords
      FROM solicitud;
`;

export const EDIT_REQUEST_QUERY = `
      UPDATE solicitud set codigo = $1, descripcion = $2, resumen = $3
      WHERE id = $4
`;

export const FILTER_EMPLOYEE_BY_NAME_QUERY = `
     SELECT id,fecha_ingreso, nombre, salario
      FROM empleado
      WHERE nombre ILIKE '%' || $1 || '%';
`;
