const express =
  require("express");

const router =
  express.Router();

const User =
  require("../models/User");


// --- REGISTER API ---

router.post(
  "/register",
  async (req, res) => {

    const {
      email
    } = req.body;

    const existingUser =
      await User.findOne({
        email
      });

    // --- DUPLICATE EMAIL CHECK ---

    if (existingUser) {

      return res.status(400).json({

        message:
          "Already registered. Please login instead."
      });
    }

    // CREATE USER

    const user =
      new User(req.body);

    await user.save();

    res.json({
      success: true
    });
  }
);

module.exports =
  router;