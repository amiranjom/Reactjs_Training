import React from 'react';

const upVotesSection = ({articleName, upvotes, setArticleInfo}) => {
    const upvoteArticle = async () => {
        const resolve = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post',
        })
        const body = await resolve.json();
        setArticleInfo(body);
    }
    return(
    <div id="upvotes-section">
        <button onClick={() => upvoteArticle()}>Add Upvote</button>
        <p>This Post has been upvoted {upvotes} times</p>
    </div>
    
)};

export default upVotesSection;