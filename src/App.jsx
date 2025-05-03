import { useEffect } from "react";
import { getPost } from "./api/PostApi";
import './App.css';

function App() {
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
    <>
      <h1>Hello React CRUD Operation...</h1>
    </>
  );
}

export default App;
