const usersDB = {
  users: require("../model/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};
const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user, pwd } = req.body;
  if (!user || !pwd)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  // check for username in the db
  const foundUser = usersDB.users.find((person) => person.username === user);
  if (!foundUser) return res.sendStatus(401); //Unauthorized
  // evaluate password
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    // create JWTs
    res.status(200).json({ success: `User ${user} is logged in!` });
  } else {
    res.sendStatus(401); //Unauthorized
  }
};

module.exports = { handleLogin };
// The above code is a Node.js controller function that handles user login. It checks if the username and password are provided, verifies if the username exists in the database, and compares the provided password with the hashed password stored in the database using bcrypt. If successful, it responds with a success message; otherwise, it sends an unauthorized status.
