const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserModal= require("../models/user");

const secret = 'test';

const signin = async (req, res) => {
  const { email, password } = req.body;
  // return res.send("testing - working fine");

  try {

    const oldUser = await UserModal.findOne({ email });

    if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign( { email: oldUser.email, firstname: oldUser.firstName, lastname: oldUser.lastName, id: oldUser._id }, secret, { expiresIn: 60 * 30 } );

    res.status(200).send({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong", error: err });
  }
};

const signup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({ email, password: hashedPassword, firstName: firstName, lastName: lastName });

    const token = jwt.sign( { email: result.email, firstName: result.firstName, lastName: result.lastName, id: result._id }, secret, { expiresIn: 60 * 30 } );

    res.status(201).send({ result, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error });
    
    console.log(error);
  }
};

module.exports = {signin, signup};