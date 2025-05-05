import React, { useEffect, useState } from 'react'
import { deletePost, getPost } from '../api/PostApi';
import { Form } from './Form';

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

  // delete Functionality...
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => {
          return curPost.id !== id;
        });
        setData(newUpdatedPosts);
      } else {
        console.log(`Failed to delete Posts ${res.status}`)
      }
    } catch (error) {
      console.log(error.message);

    }
  }

  return (
    <>
      <section>
        <Form data={data} setData={setData}/> 
      </section>
      <section className="section-post">
        <div className="card-grid">
          {data.map(({ id, title, body }) => (
            <div className="card" key={id}>
              <div className="card-info">
                <div>
                  <p className="title">{title}</p>
                  <p className="body">{body}</p>
                  <div className='btn-parent'>
                    <button>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )

}

export default Post