export const Form=()=>{

    return(
        <form>
            <div>
                <label htmlFor="title"></label>
                <input type="text" autoComplete="off" id="title" name="title" placeholder="Add title" />
            </div>
            <div>
                <label htmlFor="body"></label>
                <input type="text" autoComplete="off"
                placeholder="Add post"
                id="body"
                name="body" />
            </div>
            <button type="submit">Add</button>
        </form>
    )
}