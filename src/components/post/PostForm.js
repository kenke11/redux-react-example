import React, {Fragment, useState} from "react";

const PostForm = props => {
    const [title, setTitle] = useState('');

    const titleHandler = (event) => {
        setTitle(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newPost = {
            id: Date.now().toString(),
            title
        }

        console.log(newPost)
        setTitle('');
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
                    className="w-full border px-5 py-2"
                    onChange={titleHandler}
                    value={title}
                />
            </div>
            <button
                type='submit'
                className="border border-green-600 rounded-md px-5 py-3 font-semibold text-white bg-green-500 hover:bg-green-600 transition duration-200 mt-3"
            >Create</button>
        </form>
    )
}

export default PostForm;