import PostForm from "./components/post/PostForm";
import Posts from "./components/post/Posts";
import FetchedPosts from "./components/post/FetchedPosts";
import {Fragment} from "react";

function App() {
    return (
        <Fragment>
            <div className={'w-8/12 mx-auto py-3'}>
                <div className="">
                    <PostForm/>
                </div>
                <div className={'md:flex space-x-3 mt-10'}>
                    <div className={'w-full'}>
                        <Posts />
                    </div>
                    <div className={'w-full'}>
                        <FetchedPosts />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
