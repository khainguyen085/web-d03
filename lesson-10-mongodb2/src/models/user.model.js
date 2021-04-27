import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
    {
        email: String,
        password: String,
        firstName: String,
        lastName: String,
        birthday: String,
        isMale: Boolean,
        created: {type: Date, default: Date.now}
    },
    {
        collection: 'Users'
    }
)
export default mongoose.model('User', userSchema);
