import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  text: {
    margin: theme.spacing.unit
  },
  button: {
    margin: theme.spacing.unit
  },
  form: {
    display: 'flex'
  },
  list: {}
})

const App = props => {
  const { classes, onChange, onClick, text, comments } = props
  return (
    <div className={classes.container}>
      <div className={classes.form}>
        <TextField
          className={classes.text}
          label="Comment"
          margin="normal"
          variant="outlined"
          value={text}
          onChange={onChange}
        />
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          onClick={onClick}
        >
          submit
        </Button>
      </div>
      <div className={classes.list}>
        <ul>
          {comments.map((comment, i) => (
            <li key={i}>{comment}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  comments: PropTypes.array,
  onClick: PropTypes.func.isRequired
}

export default withStyles(styles)(App)
