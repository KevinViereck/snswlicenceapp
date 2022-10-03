export const serverAddress = "http://localhost:8080";
export const loginStorageKey = "login";

export function getLogin() {
  let login = JSON.parse(localStorage.getItem(loginStorageKey));
  if (login?.authenticated && login.token && login.email) {
    return login;
  }
  throw Error("Not Authenticated");
}

export async function login(email, password) {

  const login = {
    email,
    password,
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(login),
  };

  const response = await fetch(`${serverAddress}/user/login`, options);

  // Check if error code
  if (response.status !== 200) {
    throw Error("Invalid Login");
  }

  // parse json
  const jsonLogin = await response.json();

  // set local storage
  localStorage.setItem(loginStorageKey, JSON.stringify(jsonLogin));
}

export function logout() {
  localStorage.removeItem(loginStorageKey);
}