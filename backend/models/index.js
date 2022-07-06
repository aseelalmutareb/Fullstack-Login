import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('user', UserSchema)

mongoose.connect('mongodb://localhost/login-app')

mongoose.connection.once('open', () => console.log('DB connected')).on('error', (err) => console.log('DB error:', err))