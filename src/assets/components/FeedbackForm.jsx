import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    //  validation of typing text
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback);
      setText('')


    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How good would you rate your service with us? </h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        {/* {todo- rating coponent} */}
        <div className='input-group'>
          <input
            type='text'
            placeholder='write a review'
            onChange={handleTextChange}
            value={text}
          />
          <Button type='submit' version='secondary' isDisabled={btnDisabled}>
            Submit
          </Button>
        </div>
        {message && <div className='meassage'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm