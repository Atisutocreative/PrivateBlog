import React from 'react';
import {
    NavLink
} from 'react-router-dom';
import postData from '../data/posts.json';

function BlogPost() {


    return (
        <>
            <div className="main">
                <div className="list">
                    <h2>Blog Overzicht</h2>
                    <div className="total"> Aantal blogs <h2>{postData.length}</h2></div>
                    {postData.map((postDetail, index) => {
                        return <li key={postDetail.id}>
                            <NavLink to={`/blogsingels/${postDetail.id}`}> {postDetail.title}
                            </NavLink>
                        </li>
                    })}
                </div>
            </div>
        </>
    );
};

export default BlogPost;