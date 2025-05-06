import { useEffect, useState } from "react";
import { postData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi }) => {
  const [addData, setAddData] = useState({
    title: "",
    body: "",
  });

  // If updateDataApi is passed, set its data into the input fields
  useEffect(() => {
    updateDataApi &&
      setAddData({
        title: updateDataApi.title || "",
        body: updateDataApi.body || "",
      });
    }, [updateDataApi]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addPostData = async () => {
    try {
      const res = await postData(addData);
      if (res.status === 201) {
        setData([...data, res.data]);
        setAddData({ title: "", body: "" });
      }
    } catch (error) {
      console.error("Error posting data:", error.message);
    }
  };

  const handleFormData = (e) => {
    e.preventDefault();
    addPostData();
  };

  return (
    <form onSubmit={handleFormData}>
      <div>
        <label htmlFor="title"></label>
        <input
          type="text"
          autoComplete="off"
          id="title"
          name="title"
          placeholder="Add title"
          value={addData.title}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="body"></label>
        <input
          type="text"
          autoComplete="off"
          id="body"
          name="body"
          placeholder="Add post"
          value={addData.body}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Add</button>
    </form>
  );
};
