import PostForm from "./components/post/PostForm";
import Posts from "./components/post/Posts";
import FetchedPosts from "./components/post/FetchedPosts";
import {Fragment} from "react";

function App() {

    const posts = [
        {id: 0, username: 'tazo', desc: 'lorem'},
        {id: 1, username: 'gio', desc: 'lorem'},
        {id: 2, username: 'beqa', desc: 'lorem'},
        {id: 3, username: 'gurami', desc: 'lorem'},
        {id: 4, username: 'zaura', desc: 'lorem'}
    ]

    return (
        <Fragment>
            <div className={'w-8/12 mx-auto py-3'}>
                <div className="">
                    <PostForm/>
                </div>
                <div className={'md:flex space-x-3 mt-10'}>
                    <div className={'w-full'}>
                        <Posts posts={posts}/>
                    </div>
                    <div className={'w-full'}>
                        <FetchedPosts posts={[]}/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
