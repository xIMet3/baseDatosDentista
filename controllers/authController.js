// usersController.registerUser = async (req, res) => {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;

//     if (password.length < MIN_PASSWORD_LENGTH) {
//         return res.status(400).json({
//             error: 'Password must be longer than 6 characters',
//         });
//     }

//     try {
//         const newPassword = await bcrypt.hash(password, 6);

//         const newUser = await User.create({
//             name: name,
//             email: email,
//             password: newPassword,
//             role_id: 1
//         });

//         return res.status(201).json({
//             message: 'User created successfully',
//             user: newUser,
//         });
//     } catch (error) {
//         return res.status(500).json({
//             message: 'Something went wrong creating users',
//             error: error.message,
//         });
//     }
// };