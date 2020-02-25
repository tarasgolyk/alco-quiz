import React, {Component} from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'

class Quiz extends Component {
    state = {
      activeQuestion: 0,
      answerState: null,
      quiz: [
        {
          question: 'Найпопулярніший бренд алкоголю в світі?',
          rightAnswerId: 2,
          id: 1,
          answers: [
            {text: 'Johnnie Walker', id: 1},
            {text: 'Smirnoff', id: 2},
            {text: 'Bacardi', id: 3},
            {text: 'Absolut', id: 4}
            ]
        },
        {
          question: 'Рівень споживання пива в Україні на душу населення за рік?',
          rightAnswerId: 3,
          id: 2,
          answers: [
            {text: '115 літрів', id: 1},
            {text: '67 літр', id: 2},
            {text: '41 літр', id: 3},
            {text: '29 літр', id: 4}
          ]
        }
        ]
    }

    onAnswerClickHandler = answerId => {
      const question = this.state.quiz[this.state.activeQuestion]

      if (question.rightAnswerId === answerId) {

        this.setState({
          answerState: { [answerId]: 'success' }
        })

        const timeout = window.setTimeout(() => {
          if (this.isQuizFinished()) {
             console.log('FINISh')
          } else {
            this.setState({
              activeQuestion: this.state.activeQuestion + 1,
              answerState: null
            })
          }

          window.clearTimeout(timeout)
        }, 1000)

      } else {
        this.setState({
          answerState: { [answerId]: 'error' }
        })
      }
    }

  isQuizFinished() {
      return this.state.activeQuestion + 1 === this.state.quiz.length
  }

    render() {
        return(
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Alco-quiz</h1>
                    <ActiveQuiz
                      answers={this.state.quiz[this.state.activeQuestion].answers}
                      question={this.state.quiz[this.state.activeQuestion].question}
                      onAnswerClick={this.onAnswerClickHandler}
                      quizLength={this.state.quiz.length}
                      answerNumber={this.state.activeQuestion + 1}
                      state={this.state.answerState}
                    />
                </div>
            </div>
        )
    }
}

export default Quiz