const express = require('express');
const SignUser = require('../models/signup.model');
const router = express.Router();

router.post("", async (req, res) => {
    debugger;
    console.log(req.body, 'data console.lo');
    const { userName, designation, imageUrl } = req.body;

    if (!userName || !designation || !imageUrl) {
        return res.status(400).send({ error: 'Please provide userName, designation, and imageUrl' });
    }

    try {
        const user = await SignUser.create({
            userName,
            designation,
            imageUrl
        });

        // Check if user was created successfully
        if (user) {
            return res.status(201).send({ message: 'User created successfully', user });
        } else {
            return res.status(500).send('Internal Server Error. Please try again later.');
        }
    } catch (error) {
        console.error('Error creating user:', error);
        return res.status(500).send('Internal Server Error. Please try again later.');
    }
});

router.get("", async (req, res) => {
    try {
        const data = await SignUser.find().lean().exec();
        return res.status(200).send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        return res.status(500).send('Internal Server Error. Please try again later.');
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const data = await SignUser.findByIdAndDelete(req.params.id);
        if (!data) {
            return res.status(404).send({ message: 'No Record Found' });
        }
        return res.status(200).send(data);
    } catch (error) {
        console.error('Error deleting document:', error);
        return res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
