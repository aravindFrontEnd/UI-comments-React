import './App.css';
import { v4 as uuidv4 } from 'uuid'
import Header from './assets/components/Header.jsx';
import FeedbackList from './assets/components/FeedbackList';
import FeedbackData from './assets/components/FeedbackData';
import FeedbackStats from './assets/components/FeedbackStats';
import FeedbackForm from './assets/components/FeedbackForm';

import {useState} from 'react'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)


 const addFeedback = (newFeedback) =>{

  newFeedback.id = uuidv4()
 setFeedback([newFeedback,...feedback])



 }

  const deleteFeedBack = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=> item.id  !== id))
    }
  }


  return (
    <>
      <Header text={'Movie Review'} />
      <div className='container'>
        <FeedbackForm handleAdd ={addFeedback} />
        <FeedbackStats  feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack}/>
      </div>
    </>
  )
}

export default App
