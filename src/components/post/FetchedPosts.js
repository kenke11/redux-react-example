import React, {Fragment} from "react";
import Post from "./Post";

const FetchedPosts = props => {
    const posts = !props.posts.length
        ? <button className='w-full border border-purple-600 bg-purple-400 hover:bg-purple-600 transition duration-200 mt-3 py-5 rounded-md text-white font-semibold'>upload</button>
        : props.posts.map(post => <Post post={post} key={post.id}/>)

    return (
        <Fragment>
            <h1>Asynchrony Posts</h1>
            <ul>
                {posts}
            </ul>
        </Fragment>
    )
}

export default FetchedPosts;