import Post from '../models/post.model.js'

export const getPosts = async (req,res) =>{
    const posts = await Post.find()
    res.status(200).json({
        isSuccess: true,
        message: 'successfully recieved posts',
        posts
    })
}

export const getPostById = async (req,res)=>{
    const { id } = req.params

    const post = await Post.findById(id)

    if(id){
        return res.status(200).json({
            isSuccess: true,
            message: "successfully received post by id",
            post
        })
    }
    else{
        res.status(400).json({
            isSuccess: false,
            message:" cant find this id"
        })
    }

}

export const createPost = (req,res)=>{
    const {author, body, reaction:{like, smile, love, angry, surprise}, comments:[{friend, content}] } = req.body

    if(!author || !body || !like || !smile || !love || !angry || !surprise || !friend || !content){
        return res.status(400).json({
            isSuccess: false,
            message: "missing required fields"
        })
    }

    const newPost = new Post({...req.body})

    newPost.save(function(err,doc){
        if(err){
            return res.status(500).json({
                isSuccess: false,
                message: "database error"
            })
        }
        else{
            return res.status(200).json({
                isSuccess: true,
                message: "post is successfully created",
                newPost: doc
            })
        }
    })
}

export const deletePost = (req,res)=>{
    const { id } = req.params;

    Post.findByIdAndDelete(id, function(err,doc){
        if(err){
            return res.status(500).json({
                isSuccess: false,
                message: "cant find this id"
            })
        }
        else{
            res.status(200).json({
                isSuccess: true,
                message: " deleted this id"
            })
        }
    })    

}

export const updatePost = (req,res)=>{
    const {id} = req.params

    Post.findByIdAndUpdate(id, req.body, function(err,doc){
        if(err){
            return res.status(500).json({
                isSuccess: false,
                message: "post update failure with id "
            })
        }
        else{
            res.status(200).json({
                isSuccess: true,
                message: "post is successfully updated",
                updatePost: {...doc._doc, ...req.body}
            })
        }
    })

}

