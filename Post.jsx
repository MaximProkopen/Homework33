import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import React from 'react'

const Post = () => {

    const [post, setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getOnePost = () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((res) => res.json())
                .then((data) => setPost(data));
        }
        getOnePost();
    }, [id]);

    const callback = () => navigate(-1);
    const redirectToHome = () => navigate("/");

    return (
        <div>
            <button onClick={callback}>Go back</button>
            <button onClick={redirectToHome}>Home page</button>
            <div>Post page</div>
            <h1>{post.title}</h1>
            <h2>{post.body}</h2>
        </div>

    )
}

export default Post