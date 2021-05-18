import React, { useState } from 'react'
import './style.css'
import { v4 as uuidv4 } from 'uuid'
import { Link, Route } from "react-router-dom"

const postList = [
    {
        id: uuidv4(),
        author: 'Khải Đập Chai',
        content: 'Vẻ bề ngoài quan trọng như thế sao??',
        isClicked: false
    },
    {
        id: uuidv4(),
        author: 'Hoa TATTOO',
        content: 'KÔ PÉ NGỐC NGÊCK TÌM BOY CHUNG TÌNH!!',
        isClicked: false
    },
    {
        id: uuidv4(),
        author: 'HUẤN ROSE',
        content: 'CÓ LÀM THÌ MỚI CÓ ĂN!!!',
        isClicked: false
    }
]
const Child = ({ match }) => (
    <h1>Id was clicked : {match.params.id}</h1>
)
const Posts = () => {
    const [posts, setPosts] = useState(postList)

    return (
        <div className="posts-container">
            <ul>
                {posts.map(post => (
                    <li key={post.id} className="post--li">
                        <Link to={`/posts/${post.id}`}>{post.author}</Link>
                        <h2>{post.author}</h2>
                        <p className="post--p">{post.content}</p>
                    </li>
                ))}
            </ul>
            <Route path='/posts/:id' component={Child} />
        </div>
    )
}
export default Posts