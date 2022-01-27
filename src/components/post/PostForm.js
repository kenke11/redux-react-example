import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {createPost} from "../redux/actions";

const PostForm = props => {
    const [title, setTitle] = useState('');
    const [isValid, setIsValid] = useState(false)

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    useEffect(() => {
        const titleTrim = title.trim().length;
        if (titleTrim > 0){
            setIsValid(true);
        } else if (titleTrim === 0){
            setIsValid(false);
        }
    }, [title])

    const submitHandler = (event) => {
        event.preventDefault();

        if (!title.trim() === ''){
            setIsValid(false);
            return;
        }

        const newPost = {
            id: Date.now().toString(),
            title
        }

        console.log('new posts: ', newPost)
        props.createPost(newPost)
        setTitle('');
        setIsValid(false);
    }

    return (
        <form onSubmit={submitHandler}>
            <h1 className='text-2xl font-semibold'>Post form</h1>
            <div className="mt-3">
                <label htmlFor="title" className="w-full font-semibold text-base">Username</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    className={`w-full border px-5 py-2`}
                    onChange={titleHandler}
                    value={title}
                />
            </div>
            <button
                disabled={!isValid}
                type='submit'
                className="border border-green-600 rounded-md px-5 py-3 font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-200 mt-3 disabled:bg-gray-300"
            >Create</button>
        </form>
    )
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm);