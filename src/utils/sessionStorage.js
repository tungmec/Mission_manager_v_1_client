const Token_key = "access_token";
export const saveAccessToken = (token) => {
    sessionStorage.setItem(Token_key, token);
}

export const loadAccessToken = () => {
    return sessionStorage.getItem(Token_key);

}

export const clearAccessToken = () => {
    sessionStorage.removeItem(Token_key);
}