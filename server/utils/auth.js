// Define a middleware function called 'withAuth' that takes three parameters: req (request), res (response), and next (next middleware function)
const withAuth = (req, res, next) => {
  // Check if the 'logged_in' property is not present in the session object
  if (!req.session.logged_in) {
    // If not logged in, redirect the user to the '/login' route
    res.redirect('/login');
  } else {
    // If logged in, call the next middleware in the stack
    next();
  }
};

// Export the 'withAuth' middleware function for use in other parts of the application
module.exports = withAuth;

// ------------------------------------------------------------

// const jwt = require('jsonwebtoken');

// // set token secret and expiration date
// const secret = 'mysecretsshhhhh';
// const expiration = '2h';

// module.exports = {
//   // function for our authenticated routes
//   authMiddleware: function (req, res, next) {
//     // allows token to be sent via  req.query or headers
//     let token = req.query.token || req.headers.authorization;

//     // ["Bearer", "<tokenvalue>"]
//     if (req.headers.authorization) {
//       token = token.split(' ').pop().trim();
//     }

//     if (!token) {
//       return res.status(400).json({ message: 'You have no token!' });
//     }

//     // verify token and get user data out of it
//     try {
//       const { data } = jwt.verify(token, secret, { maxAge: expiration });
//       req.user = data;
//     } catch {
//       console.log('Invalid token');
//       return res.status(400).json({ message: 'invalid token!' });
//     }

//     // send to next endpoint
//     next();
//   },
//   signToken: function ({ username, email, _id }) {
//     const payload = { username, email, _id };

//     return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
//   },
// };
