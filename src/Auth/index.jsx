import { useNavigate } from 'react-router-dom';  // Import useNavigate

export function Register(userData) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(user => user.username === userData.username)) {
        return { error: "User already exists" };
    }
    users.push(userData);
    localStorage.setItem("users", JSON.stringify(users));

    // Redirect after registration
    return { success: "User registered successfully" };
}

// login.js (Updated)
export function login({ username, password }) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    
    const validUser = users.find(user => user.username === username && user.password === password);
    
    if (validUser) {
        localStorage.setItem("currentuser", JSON.stringify(validUser)); // Store the current user in localStorage
        return { success: true };
    } else {
        return { error: 'Invalid username or password' };
    }
}
export function logout() {
    localStorage.removeItem("currentuser");
}

export function getcurrentuser() {
    return JSON.parse(localStorage.getItem("currentuser"));
}
