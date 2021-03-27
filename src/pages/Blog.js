import React from 'react';
import {
    useParams
} from 'react-router-dom';
import posts from '../data/posts.json';

function Blog () {

    console.log(posts)
    let singleBlog = posts[0];
    const { id, title, content, date } = useParams()

    return (
        <div>
            Laat blog zien { id }
        </div>


    );
}

export default Blog;
