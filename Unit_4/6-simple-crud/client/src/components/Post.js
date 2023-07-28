

export default function Post(props) {
    const img = props.post.img
    return (
        <>
            <h3>Name: {props.post.author}</h3>
            <h3>Title: {props.post.title}</h3>
            <h3>Content: {props.post.content}</h3>
             <img src={img} /> 
            <h2>{props.post.img}</h2>

        </>
    )
}

