export const capitalizeFirstLetter = (name) => {
    if (!name) return ''; 
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}