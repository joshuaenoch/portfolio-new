import React, { useState, useEffect } from 'react'
import data from '../data.json'
import Post from '../components/Post'

export default function () {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  let journal = [...data.journal].reverse();
  let [selectedPost, setSelectedPost] = useState(journal[0])

  const selectPost = (post) => {
    setSelectedPost(post)
  }

  return (
    <div className="journal">
      <div className="sidebar">
        {journal.map((post, index) => {
          return (
            <div key={index} onClick={() => selectPost(post)}
            className={selectedPost === post ? 'selected' : ''}>{post.title}</div>
          )
        })}
      </div>
      <Post post={selectedPost}></Post>
    </div>
  )
}
