  /** @format */

  const express = require("express");
  const router = express.Router();
  const authMiddleware = require("../middleware/authmiddleware");

  const CreateUser = require("../services/users/Create");
  const RetrieveAllUser = require("../services/users/RetrieveAll");
  const DeleteUser = require("../services/users/Delete");
  const UpdateUser = require("../services/users/Update");
  const RetrieveUser = require("../services/users/Retrieve");

  router.use(authMiddleware);
  router.post("/create", async (req, res) => {
    const {
      firstname,
      lastname,
      age,
      address,
      gender,
      maritalstatus,
      zipcode,
      nationality,
      email,
      phonenumber,
      hasdriverlicense,
      driveridno,
      verified,
    } = req.body;

    const results = await CreateUser(
      firstname,
      lastname,
      age,
      address,
      gender,
      maritalstatus,
      zipcode,
      nationality,
      email,
      phonenumber,
      hasdriverlicense,
      driveridno,
      verified
    );
    if (results) {
      const createdUser = {
        _id: results._id, // Include the ID in the response
        firstname,
        lastname,
        age,
        address,
        gender,
        maritalstatus,
        zipcode,
        nationality,
        email,
        phonenumber,
        hasdriverlicense,
        driveridno,
        verified,
      };
      res.status(200).send(createdUser);
    } else {
      res.status(500).send({
        status: results,
        message: "Failed",
      });
    }
  });



  router.get("/retrieveAll", async (req, res) => {
    const results = await RetrieveAllUser();
    if (results) {
      res.status(200).send(results);
    } else {
      res.status(500).send({
        status: results,
        message: "Not Retrieved",
      });
    }
  });

  router.get("/retrieve/:id", async (req, res) => {
    const _id = req.params.id;

    const results = await RetrieveUser(_id);
    if (results) {
      res.status(200).send(results);
    } else {
      res.status(500).send({
        status: results,
        message: "Not Retrieved",
      });
    }
  });

  router.put("/update/:id", async (req, res) => {
    const _id = req.params.id;
    const { set } = req.body;

    const results = await UpdateUser(_id, set);
    if (results.success) {
      res.status(200).send({
        status: results.success,
        message: results.message,
        newData: results.newData,
      });
    } else {
      res.status(500).send({
        status: results.success,
        message: results.message,
      });
    }
  });

  router.delete("/delete/:id", async (req, res) => {
    const _id = req.params.id;

    const results = await DeleteUser(_id);
    if (results.success) {
      res.status(200).send({
        status: results.success,
        message: results.message,
      });
    } else {
      res.status(500).send({
        status: results.success,
        message: results.message,
      });
    }
  });

  module.exports = router;
