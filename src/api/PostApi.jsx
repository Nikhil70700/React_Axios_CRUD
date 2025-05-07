import axios from "axios";
import React from 'react';

// Create Axios instance with baseURL
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// GET method to fetch posts
export const getPost = () => {
  return api.get("/posts");
};

//DELETE method 

export const deletePost=(id)=>{
  return api.delete(`/posts/${id}`)
}

//POST method

export const postData=(post)=>{
  return api.post("/posts",post)
}


// PUT method

export const updateData=(id,post)=>{
  return api.put(`/posts${id}`,post);
};










// You can add more API methods here, like:
// export const getPostById = (id) => api.get(`/posts/${id}`);
// export const createPost = (data) => api.post("/posts", data);
// export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
// export const deletePost = (id) => api.delete(`/posts/${id}`);
