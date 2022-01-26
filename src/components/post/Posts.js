import React, {Fragment} from "react";
import Post from "./Post";

const Posts = props => {
    const posts = !props.posts.length
        ? <div className='border border-gray-300 rounded-md px-10 py-5 mt-3'>Not Found</div>
        : props.posts.map(post => <Post post={post} key={post.id}/>)

    return (
        <Fragment>
            <h1>Synchrony Posts</h1>
            <ul>
                {posts}
            </ul>
        </Fragment>
    )
}

export default Posts;