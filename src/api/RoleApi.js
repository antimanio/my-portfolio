export const getRoles = async () => {
    const response = await fetch('data/roles.json');
    const { data } = await response.json();
    return data;
}


