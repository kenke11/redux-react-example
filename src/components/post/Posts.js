import React, {Fragment} from "react";
import {connect} from 'react-redux'
import Post from "./Post";

const Posts = ({syncPosts}) => {
    console.log('rame: ', syncPosts)
    const posts = !syncPosts.length
        ? <div className='border border-gray-300 rounded-md px-10 py-5 mt-3'>Not Found</div>
        : syncPosts.map(post => <Post post={post} key={post.id}/>)

    return (
        <Fragment>
            <h1>Synchrony Posts</h1>
            <ul>
                {posts}
            </ul>
        </Fragment>
    )
}

const mapStateToProps = state => {
    console.log('state => ', state)
    return {
        syncPosts: state.posts.posts
    }
}

export default connect(mapStateToProps, null)(Posts);