import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema(
   {
       author: String,
       body: String,
       created: {type: Date, default: Date.now},
       reaction: {
           like: Number,
           smile: Number,
           love: Number,
           angry: Number,
           surprise: Number,
        },
        comments:[
            {
                friend: String,
                content: String
            }
        ]
    },
    {
        collection: 'Posts'
    }
)
export default mongoose.model('Post', userSchema);
