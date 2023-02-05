import User from '../model/userSchema.js'

export const userSignup = async (req, res) => {
    try {
        // const exist = await User.findOne({ username: req.body.username });

        // if (exist) {
        //     return res.status(401).json({ message: 'userexist' });
        // }
        console.log(req.body)
        const user = req.body;
        const newUser = new User(user);
        await newUser.save();
        res.status(200).json({ message: 'user' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const userLogin = async (req, res) => {
    try {
        const user = await User.findOne({ Username: req.body.username,Password:req.body.Password });

        if (user) {
            return res.status(200).json({ data:user });
        }else{
            return res.status(401).json({ message: 'not matched' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}