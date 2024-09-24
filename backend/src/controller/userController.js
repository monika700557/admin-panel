const userService = require("../services/userServices");

exports.signup = async (req, res) => {
  const { register_name, register_email, register_password, register_number } = req.body;

  // Check for missing fields
  if (!register_name || !register_email || !register_password || !register_number) {
    return res.send({ status: false, msg: "Please fill required fields." });
  }

  try {
    // Check if the email is already registered
    const isUserEmail = await userService.isRegisteredUser(register_email);
    
    if (isUserEmail) {
      return res.send({ status: false, msg: "User Already Registered", data: {} });
    }

    // Register the user if the email is not already registered
    await userService.registerUser(register_name, register_email, register_password, register_number);

    // Send success response
    return res.send({
      status: true,
      msg: "User Registered Successfully",
      data: req.body,
    });
  } catch (err) {
    // Handle errors and send error response
    console.error("Error during user registration:", err.message);
    return res.status(500).send({ status: false, msg: "Server Error", error: err.message });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    // Fetch all registered users from the service layer
    const users = await userService.getAllUsers();

    if (users.length === 0) {
      return res.send({ status: false, msg: "No users found." });
    }

    // Send back the list of users
    res.send({
      status: true,
      msg: "Users fetched successfully",
      data: users,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ status: false, msg: "Server Error", error: err.message });
  }
};
