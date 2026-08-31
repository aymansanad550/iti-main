import React, { createContext, useState, useEffect, useMemo } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    // Mock login logic
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const foundUser = registeredUsers.find(u => u.email === email && u.password === password);
    
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const register = (name, email, password) => {
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userExists = registeredUsers.some(u => u.email === email);
    
    if (userExists) {
      return false; // User already exists
    }
    
    const newUser = { name, email, password };
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    // Automatically log in after registration
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = useMemo(() => ({
    user,
    login,
    register,
    logout
  }), [user]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
