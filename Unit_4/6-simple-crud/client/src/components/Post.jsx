

export default function Post({ posts }) {
    if (!Array.isArray(posts)) {
        // Handle the case when 'posts' is not an array
        return (<h1>Not an Array</h1>); // or display an error message, or a loading indicator, etc.
      }

    return (
        <>
        <h1>Index Page</h1>
        { posts.map((p, idx) => (

            <><h3>Name: {p.author}</h3>
            <h3>Title: {p.title}</h3>
            <h3>Content: {p.content}</h3>
             <img src={p.img} /> 
            <h2>{p.img}</h2>
            </>
    ))}
       </>
    )
}

