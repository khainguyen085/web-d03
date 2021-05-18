import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

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
// const Post = ({ match }) => {
//     const [posts, setPosts] = useState(postList)
//     posts.filter(post => {
//         if (match.params.id === post.id)
//             return post.id
//             console.log(post.id)
//     })
//     return post => (
//         <div>
//             <h1>{post.author}</h1>
//             <p>{post.content}</p>
//         </div>
//     )
// }

const Post = ({match}) =>(
   <div>
        <h1>ID was clicked: {match.params.id}</h1>
   </div>
)
export default Post