import React from 'react'

import './style.css'
import UserComponent from '../../components/UserClassComponent'
import { v4 as uuidv4 } from 'uuid'
import PostClassComponent from '../../components/PostClassComponent'
import CounterMachine from '../../components/CounterFuncComponent'
import CountMachine from '../../components/CountClassComponent'
import ClockHooks from '../../components/ClockFuncComponent'

const postList = [
    {
        id: uuidv4(),
        author: 'Khai',
        content: 'Ve be ngoai quan trong nhu the a? Ve be ngoai quan trong nhu the sao? Haaaa!',
        isClicked: false
    },
    {
        id: uuidv4(),
        author: 'HOA',
        content: 'KO PE NGOC NGEK TIM BOY CHUNG TINH!!',
        isClicked: false
    },
    {
        id: uuidv4(),
        author: 'HUAN',
        content: 'CO LAM THI MOI CO AN!!!',
        isClicked: false
    }
]


class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: postList,
        }
    }

    handleClickPost = (postId) => {
        const newPosts = this.state.posts.map(post => {
            if (post.id === postId) return { ...post, isClicked: !post.isClicked }
            return post
        })
        this.setState({ posts: newPosts })
    }
    render() {
        return (
            <div className="home-page">
                <UserComponent name="khai" age={18} gender="male" />
                {this.state.posts.map(post => <PostClassComponent postInfor={post} onClickPost={this.handleClickPost} />)}
                <CounterMachine/>
                <ClockHooks/>
            </div>
        )
    }
}

export default HomePage