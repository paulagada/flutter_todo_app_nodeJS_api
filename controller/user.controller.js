const userService = require("../services/user.services");

exports.register = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await userService.registerUser(email, password);

    console.log('successfully registered');

    res.json({ success: true, status: "user registered successfully" });
  } catch (err) {
    throw err;
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userService.checkuser(email);

    if (!user) {
      throw Error('User do not exist')
    }
    const isMatch = await user.comparePassword(password)

    if (isMatch === false) {
      throw Error('password invalid')
    }
 
    let tokenData = {_id:user._id, email:user.email}

    const token = await userService.generateToken(tokenData,"secretKey", '1h')
    

    res.status(200).json({ success: true, token: token });
  } catch (err) {
    throw err;
  }
};
