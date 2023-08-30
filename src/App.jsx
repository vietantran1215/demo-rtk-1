import { useState } from 'react'
import './App.css'
import Title from './compontents/Title'
import Paragraph from './compontents/Paragraph'
import { useDispatch } from 'react-redux'
import { updateContent } from './store/slices/content.slice'
import PostList from './compontents/PostList'

function App() {
  const dispatch = useDispatch();

  const [appFormData, setAppFormData] = useState({
    title: '',
    paragraph: ''
  });

  const handleAppFormChange = (e) => {
    const { name, value } = e.target;

    setAppFormData(prev => ({
      ...prev,

      // computed property name (ES6)
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContent(appFormData));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleAppFormChange} />
        </div>
        <div>
          <label htmlFor="paragraph">Paragraph</label>
          <textarea name="paragraph" id="paragraph" cols="30" rows="10" onChange={handleAppFormChange}></textarea>
        </div>
        <button>Save</button>
      </form>
      <Title />
      <Paragraph />
      <hr />
      <PostList />
    </>
  )
}

export default App
