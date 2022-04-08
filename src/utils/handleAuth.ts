export const requestAccessPermission = () => {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'));
    return isAuth;
};
