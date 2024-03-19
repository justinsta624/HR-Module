class AuthService {
  // get user data
  getProfile() {
    return this.getUser();
  }

  // check if user is logged in
  loggedIn() {
    return !!this.getUser();
  }

  // get user from session storage
  getUser() {
    const user = sessionStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

// login user
login(user) {
  if (!user) {
    throw new Error('Invalid user object. User object must be provided for login.');
  }

  // Save user to session storage
  sessionStorage.setItem('user', JSON.stringify(user));
  window.location.assign('/departments');
}


  // logout user
  logout() {
    // Clear user from session storage
    sessionStorage.removeItem('user');
    // Reload the page to reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();
