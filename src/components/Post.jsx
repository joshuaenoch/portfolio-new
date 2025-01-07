import React from 'react'

export default function Post({post}) {

  return (
    <div className="post">
      <h2 className="title">{post.title}</h2>
      <div className="date">{post.date}</div>
      {post.type === "md" ?
        (<md-block className="content" src={`/src/journal/${post.id}.md`}></md-block>) : (<div></div>)
      }
    </div>
  )
}
