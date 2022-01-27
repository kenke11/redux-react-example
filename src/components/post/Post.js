import React from "react";

const Post = props => {
    return (
        <li className='border border-gray-300 rounded-md px-10 py-5 mt-3'>
            {props.post.title}
        </li>
    )
}

export default Post;