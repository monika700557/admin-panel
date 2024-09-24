const userService = require("../services/userServices");

exports.signup = async (req, res) => {

  const { register_name, register_email, register_password, register_number } =
    req.body;

  if (
    !register_name ||
    !register_email ||
    !register_password ||
    !register_number
  ) {
    res.send({ status: false, msg: "Please fill required field." });
  }

  // check already email exist or not
  try {
    const isUserEmail = await userService.isRegisteredUser(register_email);

    // Do something with isUserEmail if needed
    console.log(isUserEmail);
    
    if (isUserEmail) {
      return res.send({
        status: false,
        msg: "User Already Registered",
        data: {},
      });
    }
  } catch (err) {
    console.log(err.message);
  }

  // if email is already exist

  // res.send({status: true, msg: "Email already regitered", data: {} })

  // if email not exist then register user
  await userService.registerUser(
    register_name,
    register_email,
    register_password,
    register_number
  );

  res.send({
    status: true,
    msg: "User Registered Successfully",
    data: req.body,
  });
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
