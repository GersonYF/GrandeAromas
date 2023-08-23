//const urlChanged = "192.168.100.2";
const urlChanged = "0.0.0.0";
const API_URL = {
  auth: `http://${urlChanged}:3003/api/auth`,
  users: `http://${urlChanged}:3001/api/users`,
  store: `http://${urlChanged}:3002/api/store`,
}

export async function API_loginUser(email, password) {
  const response = await fetch(`${API_URL.auth}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

export async function API_fetchUserData(token) {
  const response = await fetch(`${API_URL.auth}/me`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}
