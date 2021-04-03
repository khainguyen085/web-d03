import { v4 as uuidv4 } from 'uuid';

let posts = [];

export const getPosts = (req,res) =>{
    res.send(posts);
}

export const createPost = (req,res)=>{
    const post = req.body;

    posts.push({id: uuidv4(), ...post });

    res.send(`post with the title ${post.title} added to the database!`);
}

export const getPost = (req,res)=>{
    const {id} = req.params;

    const foundPost = posts.find((post)=> post.id === id);

    res.send(foundPost);
}

export const deletePost = (req,res)=>{
    const {id} = req.params;

    posts = posts.filter((post)=>post.id !== id);

    res.send(`Post with the id ${id} deleted from the database.`)
}

export const updatePost = (req,res)=>{
    const {id} = req.params;
    const { title, content } = req.body;

    const post = posts.find((post)=>post.id === id);

    if(title) post.title = title;
    if(content) post.content = content;

    res.send(`Post with the id ${id} has been updated `);
}

