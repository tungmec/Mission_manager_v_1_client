const Token_key = "access_token";

export const saveAccessToken = (token) => {
    localStorage.setItem(Token_key, token);
}

export const loadAccessToken = () => {
    return localStorage.getItem(Token_key);

}

export const clearAccessToken = () => {
    localStorage.removeItem(Token_key);
}