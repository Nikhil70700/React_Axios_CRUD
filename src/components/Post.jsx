import React, { useEffect } from 'react'
import { getPost } from '../api/PostApi';

const Post = () => {
    const getPostData = async () => {
        try {
          const res = await getPost();
          console.log("Posts:", res.data);
          
    
        } catch (error) {
          console.error("Error fetching posts:", error.message);
        }
      };
    
      useEffect(() => {
        getPostData();  
      }, []);
    
  return (
    <div>Hello This is Post of CRUD From Axios</div>
  )
}

export default Post