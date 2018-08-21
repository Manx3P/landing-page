import React from 'react'
import styles from './index.scss'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class component extends React.Component {

  render () {
    return (
      <div className={styles.app}>
        <div className={styles.logo}>
        </div>
        <div className={styles.contact}>
          <p> Do you want we talk with you? </p>
          <TextField
            id='email'
            placeholder='Your work email'
            type='text'/>
          <Button
            variant='contained'>
              SEND
          </Button>
        </div>
      </div>
    )
  }
}

export default component
