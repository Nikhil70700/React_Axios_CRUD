import { useEffect, useState } from "react";
import { postData, updateData } from "../api/PostApi";

export const Form = ({ data, setData, updateDataApi, setUpdateDataApi }) => {
    const [addData, setAddData] = useState({
        title: "",
        body: "",
    });

    let isEmpty = Object.keys(updateDataApi).length === 0;

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
    const updatePostData = async () => {
        try {
            const res = await updateData(updateDataApi.id, addData)
            console.log(res);

            setData((prev)=>{
                console.log(prev)
            })
        } catch (error) {
            console.log(error);

        }
    };

    // FOrm Submission
    const handleFormData = (e) => {
        e.preventDefault();
        const action = e.nativeElement.submitter.value;
        if (action === "Add") {
            addPostData();
        } else if (action === "Edit") {
            updatePostData();
        }
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
            <button type="submit" value={
                isEmpty ? "Add" : "Edit"
            }>{isEmpty ? "Add" : "Edit"}</button>
        </form>
    );
};
