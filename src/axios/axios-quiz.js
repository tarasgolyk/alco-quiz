import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-1d82e.firebaseio.com/'
})