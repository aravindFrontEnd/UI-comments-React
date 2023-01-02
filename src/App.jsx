import './App.css';
import Header from './assets/components/Header.jsx';
import FeedbackList from './assets/components/FeedbackList';
import FeedbackData from './assets/components/FeedbackData';
import FeedbackStats from './assets/components/FeedbackStats';

import {useState} from 'react'

function App() {

  const [feedback, setFeedback] = useState(FeedbackData)


  const deleteFeedBack = (id) => {
    if(window.confirm('Are you sure you want to delete?')){
      setFeedback(feedback.filter((item)=> item.id  !== id))
    }
  }


  return (
    <>
      <Header text={'Movie Review'} />
      <div className='container'>
        <FeedbackStats  feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedBack}/>
      </div>
    </>
  )
}

export default App
