const express = require('express');
const router = express.Router();
const user = require('../models/googlesignin');


router.post("/googleSignin", async(request, response) => {
    let username = request.body.username;
    let email = request.body.email;
    let provider = request.body.provider;

    let newUser = await user.findOne({ email: email });
    if (!newUser) {
        user.create({ username: username, email: email, provider: provider }).then(result => {
            return response.status(200).json(result);
        }).catch(error => {
            return response.status(200).json(error)
        });
    } else
        return response.status(200).json(result);
})

module.exports = router;