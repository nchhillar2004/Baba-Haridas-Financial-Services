import React from 'react';

const PostCard = ({ post }) => {
  return (
    <div className="postcard flex flex-col bg-white p-3 rounded-md h-fit mb-3">
        <div className="pcard-top flex items-center">
            <img src={post.imageUrl} width={40} alt={post.title} />
            <b className='mx-2 text-slate-800'>{post.author}</b>
        </div>
        <div className="pcard-center mb-1 overflow-hidden">
            <h1 className='font-black text-lg my-1'>{post.title}</h1>
            <p>{post.description}</p>
        </div>
        <div className="pcard-bottom">
           <p className='from-neutral-700 text-xs'>Date: {post.date}</p>
        </div>
    </div>
  );
};

export default PostCard;
