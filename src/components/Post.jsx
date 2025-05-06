import React, { useEffect, useState } from 'react';
import { deletePost, getPost } from '../api/PostApi';
import { Form } from './Form';

const Post = () => {
  const [data, setData] = useState([]);
  const [updateDataApi,setUpdateDataApi]=useState({});

  const getPostData = async () => {
    try {
      const res = await getPost();
      console.log("Posts:", res.data);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  // Delete functionality
  const handleDeletePost = async (id) => {
    try {
      const res = await deletePost(id);
      if (res.status === 200) {
        const newUpdatedPosts = data.filter((curPost) => curPost.id !== id);
        setData(newUpdatedPosts);
      } else {
        console.log(`Failed to delete post: ${res.status}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleUpdatePost=(curElem)=>setUpdateDataApi(curElem)

  return (
    <>
      <section>
        <Form 
        data={data}
         setData={setData}
         updateDataApi={updateDataApi}
         setUpdateDataApi={setUpdateDataApi}
         />
      </section>

      <section className="section-post">
        <div className="card-grid">
          {data.map((curElem) => {
            const { id, title, body } = curElem;
            return (
              <div className="card" key={id}>
                <div className="card-info">
                  <p className="title">{title}</p>
                  <p className="body">{body}</p>
                  <div className="btn-parent">
                    <button onClick={() => handleUpdatePost(curElem)}>Edit</button>
                    <button className="btn-delete" onClick={() => handleDeletePost(id)}>Delete</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Post;
