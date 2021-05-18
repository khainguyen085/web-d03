import React from 'react'

import './style.css'

class PostClassComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.postInfor.isClicked === this.props.postInfor.isClicked) {
            return false
        }
        return true
    }
    render() {
        const { postInfor, onClickPost } = this.props
        const { id, author, content, isClicked } = this.props.postInfor
        return (
            <div className={isClicked ? "post--clicked post-container" : "post-container"} onClick={() => onClickPost(id)}>
                <h3>{author}</h3>
                <p>{content}</p>
            </div>
        )
    }
}
export default PostClassComponent