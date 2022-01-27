import React, {Fragment} from "react";
import Post from "./Post";
import AsyncPosts from "./AsyncPosts";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";

const FetchedPosts = props => {
    const dispatch = useDispatch()

    const uploadPostHandler = () => dispatch(fetchPosts())

    const fetchedPosts = useSelector(state => state.posts.fetchedPost)

    return (
        <Fragment>
            <h1>Asynchrony Posts</h1>
            {fetchedPosts.length !== 0 ?
                <AsyncPosts posts={fetchedPosts} /> :
                <button
                    className='w-full border border-purple-600 bg-purple-400 hover:bg-purple-600 transition duration-200 mt-3 py-5 rounded-md text-white font-semibold'
                    onClick={uploadPostHandler}
                >upload</button>
            }
        </Fragment>
    )
}

export default FetchedPosts;