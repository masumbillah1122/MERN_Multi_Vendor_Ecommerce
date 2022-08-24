import express from "express";
import User from "../models/userModel.js";
import bcrypt from 'bcryptjs';

const userRouter = express.Router();

//for login user
userRouter.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    //if user exist
    if(user){
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                address: user.address,
                phone: user.phone,
                image: user.image,
                isAdmin: user.isAdmin
            });
            return;
        }
    }
    res.status(401).send({ message: "Invalid Email or Password" });
});

//for Register user
userRouter.post('/register', async(req, res)=>{
    const newUser = await User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      address: req.body.address,
      phone: req.body.phone,
      image:
        req.body.image ||
        "https://res.cloudinary.com/dmiu18lya/image/upload/v1660985350/seller_gouuaq.png", //for default image
    });
    const user = await newUser.save();
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        image: user.image,
        isAdmin: user.isAdmin
    });
});

//for update users
userRouter.put('/update', async (req, res) => {
    const user = await User.findById(req.body._id);
    //if user exists
    if (user) {
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        user.address = req.body.address || user.address;
        user.phone = req.body.phone || user.phone;
        user.image = req.body.image || user.image;
        if (req.body.password) {
            user.password = bcrypt.hashSync(req.body.password);
        }
        const updateUser = await user.save();
        res.send({
            _id: updateUser._id,
            name: updateUser.name,
            email: updateUser.email,
            address: updateUser.address,
            phone: updateUser.phone,
            image: updateUser.image,
            isAdmin: updateUser.isAdmin,
        });
    } else {
        res.status(401).send({ message: "User not found" });
    }
});

// for all users
userRouter.get("/all", async (req, res) => {
  const users = await User.find();
  res.send(users);
});

//get user by id
userRouter.get("/user/:id", async (req, res) => {
  const user = await User.findOne({ _id: req.params.id });
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});
    
export default userRouter;
