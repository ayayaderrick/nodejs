const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req?.roles) return res.sendStatus(401);
    const rolesArray = [...allowedRoles];
    const result = req.roles
      .map((role) => rolesArray.includes(role))
      .find((val) => val === true);
    if (!result) return res.sendStatus(401);
    next();
  };
};

module.exports = verifyRoles;
// The above code is a middleware function for Express.js that checks if the user's roles match the allowed roles specified in the function's arguments. If the user does not have the required roles, it sends a 401 Unauthorized status. If the user has the required roles, it calls the next middleware function in the stack.
