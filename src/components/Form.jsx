import { useState } from "react"
import { postData } from "../api/PostApi";

export const Form = ({ data, setData }) => {

    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setAddData((prev) => {
            return {
                ...prev, [name]: value,
            }
        })

    }

    const addPostData = async () => {
        const res = await postData(addData)
        if ((res.status === 201)) {
            setData([...data, res.data])
            setAddData({ title: "", body: "" })

        }
    }

    // Form Submission
    const handleFormData = (e) => {
        e.preventDefault();
        addPostData();
    }
    return (
        <form onSubmit={handleFormData}>
            <div>
                <label htmlFor="title"></label>
                <input type="text"
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
                <input type="text"
                    autoComplete="off"
                    id="body"
                    name="body"
                    placeholder="Add post"
                    value={addData.value}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}

