import User from '../models/user.model.js';

export const getUsers = async (req, res) => {
    const users = await User.find()
    res.status(200).json({
        isSuccess: true,
        message: 'successfully recieved users',
        users
    })
}

export const getUserById = async (req, res) => {
    const { id } = req.params

    const user = await User.findById(id)

    if (user) {
        return res.status(200).json({
            isSuccess: true,
            message: 'successfully received user by id',
            user
        })
    }
    else {
        res.status(400).json({
            isSuccess: false,
            message: 'cant find this id'
        })
    }
}

export const createUser = (req, res) => {
    const { email, password, firstName, lastName, birthday, isMale } = req.body;

    if (!email || !password || !firstName || !lastName || !birthday) {
        return res.status(400).json({
            isSuccess: false,
            message: 'missing required fields',
        })
    }

    const newUser = new User({ ...req.body })

    newUser.save(function (err, doc) {
        if (err) {
            return res.status(500).json({
                isSuccess: false,
                message: 'database error'
            })
        } else {
            return res.status(200).json({
                isSuccess: true,
                message: 'user is successfully created',
                newUser: doc
            })
        }
    })
}

export const deleteUser = (req, res) => {
    const { id } = req.params

    User.findByIdAndDelete(id, function (err, doc){
        if(err){
            return res.status(500).json({
                isSuccess: false,
                message: "cant found this id"
            })
        }
        else{
            res.status(200).json({
                isSuccess: true,
                message: "deleted this id"
            })
        }
    })
}

export const updateUser = (req, res) => {
    const { id } = req.params

    User.findByIdAndUpdate(id, req.body, function (err, doc) {
        if (err) {
            return res.status(500).json({
                isSuccess: false,
                message: ' user update failure with id'
            })
        }

        res.status(200).json({
            isSuccess: true,
            message: 'user is successfully updated',
            updateUser: { ...doc._doc, ...req.body }
        })
    })
}

