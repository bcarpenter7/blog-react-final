import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import Post from './components/Post'
import Add from './components/Add'
import Edit from './components/Edit'
import About from './components/About';

function App() {
  const [post, setPost] = useState([])

  const getPost = () => {
    axios.get('http://localhost:3000/post')
      .then((response) => setPost(response.data), (err) => console.log(err))
      .catch((error) => console.log(error))
  }

  const handleCreate = (createdPost) => {
    axios.post('http://localhost:3000/admin', createdPost)
      .then((response) => {
        setPost([...post, response.data])
      })
  }

  // const handleEdit = (editedPerson) => {
  //   axios.put('http://localhost:3000/people/' + editedPerson._id, editedPerson)
  //     .then((response) => {
  //       let newPost = post.map((person) => {
  //         return person._id !== editedPerson._id ? person : editedPerson
  //       })
  //       setPost(newPost)
  //     })
  // }
  // const handleDelete = (deletedPerson) => {
  //   axios.delete('http://localhost:3000/people/' + deletedPerson._id)
  //     .then((response) => {
  //       let newPeople = people.filter((person) => {
  //         return person._id !== deletedPerson._id
  //       })
  //       setPeople(newPeople)
  //     })
  // }





  useEffect(() => {
    getPost()
  }, [])

  return (
    <>
      <h1>All People</h1>

      {post.map((post) => {
        return (
          <>
            <Routes>
              <Route path="/about" element={<About />} />
            </Routes>
            <Post post={post} />
            {/* <Edit post={post} handleEdit={handleEdit} /> */}
            {/* <button onClick={() => { handleDelete(post) }}>X</button> */}
          </>
        )
      })}
    </>
  );
}

export default App;
