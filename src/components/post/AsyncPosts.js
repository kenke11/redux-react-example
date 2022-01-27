import React from "react";
import Post from "./Post";
function AsyncPosts ({posts}) {
    let asyncPost = [];
    posts.forEach(x => {
        asyncPost.push(<Post post={x} key={x.id}/>)
    })

    return(
        <ul>
            {asyncPost}
        </ul>
    )
}

export default AsyncPosts;