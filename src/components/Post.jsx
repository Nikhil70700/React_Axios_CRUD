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

  return <section className='section-post'>
    <ol>
      {
        data.map((curElem) => {
          const { id, body, title } = curElem;
          return (
            <li key={id}>
              <p>Title:{title}</p>

              <p>Body:{body}</p>
              <button>Edit</button>
              <button className='btn-delete'>Delete</button>

            </li>
          )
        })
      }
    </ol>
  </section>
}

export default Post