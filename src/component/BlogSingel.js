import React from 'react';
import postData from '../data/posts.json';
import {
    useHistory,
    useParams
} from 'react-router-dom';


function BlogSingel () {
   // const history = useHistory();

    const { slug } = useParams();
    const singlePost = postData[`${slug-1}`];
//console.log("test Blogsingel")

    return (
        <div className="main">
            <h3>{singlePost.title}</h3>
            <span className="nummer">Blog Nummer {singlePost.id}</span>
            <span>{singlePost.date}</span>
            <p>{singlePost.content}</p>
        </div>
    );
};

export default BlogSingel;