const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModal= require("../models/user");

const secret = 'test';

const signin = async (req, res) => {
  const { email, password } = req.body;
  // return res.send("testing - working fine");

  try {
    const userExist = await UserModal.findOne({email});

    if(!userExist) return res.status(404).send({"msg": "user doesn't exist"});

    const pass = await bcrypt.compare(userExist.password, password);

    if(!pass) return res.status(400).send({"msg": "password doesn't match"});

    const token = jwt.sign({email: userExist.email, id: userExist._id}, secret, {expiresIn: 60 * 2});

    res.status(200).json({ result: userExist, token });

    // const oldUser = await UserModal.findOne({ email });

    // if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    // const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    // if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    // const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "1h" });

    // res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, firstName: firstName, lastName: lastName });

    const token = jwt.sign( { email: result.email, id: result._id }, secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
    
    console.log(error);
  }
};

module.exports = {signin, signup};