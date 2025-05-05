import React, { useEffect, useState } from 'react'
import { getPost } from '../api/PostApi';

const Post = () => {
  const [data, setData] = useState([]);
  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log("Posts:", res.data);
      setData(res.data)

    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return<section className="section-post">
  <div className="card-grid">
    {data.map(({ id, title, body }) => (
      <div className="card" key={id}>
        <div className="card-info">
          <div>
            <p className="title">{title}</p>
            <p className="body">{body}</p>
            <div className='btn-parent'>
            <button>Edit</button>
            <button className="btn-delete">Delete</button>
            </div>
            
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
}

export default Post