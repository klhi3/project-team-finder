const { User } = require('../../models');
const bcrypt = require("bcrypt");

module.exports = {
    login: async (username, password) => {
        try {
            const user = await User.findOne({
                where: {
                    name: username
                }
            });
            // console.log("!!!!USER: " + user);
            // const matched = await user.validatePassword(password);
            const matched = bcrypt.compareSync(password, user.password);
            // console.log("MATCH!!!: " + matched);
            if(matched) {
                loggedInUser = user;
                return user;
            } else {
                return null;
            }
        } catch(err) {
            console.error(`UerService.login(): Error loging in "${username}" with pass "${password}"`, err);
        }

        return null;
    },
    signup: async (username, password, email, city, state) => {
        try {
            const exisiting = await User.findOne({
                where: {
                    name: username
                }
            });
            if(exisiting) {
                console.warn(`UerService.signup(): Error creating user with username="${username}", already exists"`)
                return null;
            }

            const user = await User.create({
                name: username,
                password: password,
                email: email,
                city: city,
                state: state
            });

            return user;
        } catch(err) {
            console.error(`UerService.signup(): Error creating user with username="${username}"`, err);
        }

        return null;
    },
}