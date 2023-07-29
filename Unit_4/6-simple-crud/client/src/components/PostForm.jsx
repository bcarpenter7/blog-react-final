import { useState } from 'react'



export default function PostForm(props){
    const [tempPost, setTempPost] = useState({
        author: '',
        title: '',
        content: '',
        img: ''
    })

    function handleChange(e){
        setTempPost({...tempPost, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.handleCreate(tempPost)
    }



    return(
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label>Enter Author</label>
                <input 
                value={tempPost.author} 
                name="author"
                onChange={handleChange}
                />

                <label>Enter Title</label>
                <input 
                value={tempPost.title} 
                name="title"
                onChange={e => handleChange(e)}
                />

                <label>Enter Content</label>
                <input 
                value={tempPost.content} 
                name="content"
                onChange={e => handleChange(e)}
                />

                <label>Enter Img Url</label>
                <input 
                value={tempPost.img} 
                name="img"
                onChange={e => handleChange(e)}
                />
                <button type="submit">Enter</button>
            </form>
        </>


    )
}