import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import LockIcon from '@material-ui/icons/LockOutlined'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { Formik } from 'formik'
import * as Yup from 'yup'

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  },
  errorMessage: {
    textAlign: 'center',
    '&:first-letter': {
      textTransform: 'capitalize'
    }
  }
})

const handlesignInSubmit = (history) => (values, { setSubmitting, setErrors }) => {
  setSubmitting(true)

  axios.post('/api/auth/login', values)
    .then(function (response) {
      setSubmitting(false)
      history.push('/dashboard') // TODO: Need to get dashboard route using function
    })
    .catch(function (error) {
      const errorMessage = error.response.data.message ? error.response.data.message : 'Authentication failed.'
      setErrors({
        authMessage: errorMessage
      })
      setSubmitting(false)
    })
}

const signIn = (props) => {
  const { classes, history } = props

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Formik initialValues={{ email: '', password: '' }}
          onSubmit={handlesignInSubmit(history)}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email()
              .required('Email ID is required'),
            password: Yup.string()
              .required('Password is required')
          })}>
          {({
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <form className={classes.form} onSubmit={handleSubmit} noValidate>
              {
                errors.authMessage && <FormHelperText className={classes.errorMessage} error>{errors.authMessage}</FormHelperText>
              }
              <FormControl margin='normal' required fullWidth error={errors.email && touched.email}>
                <InputLabel htmlFor='email'>Email Address</InputLabel>
                <Input id='email' name='email' autoComplete='email' autoFocus
                  type='text'
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.email &&
                    touched.email && <FormHelperText>{errors.email}</FormHelperText>}
              </FormControl>
              <FormControl margin='normal' required fullWidth error={errors.password && touched.password}>
                <InputLabel htmlFor='password'>Password</InputLabel>
                <Input name='password' type='password' id='password' autoComplete='current-password'
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                {errors.password &&
                    touched.password && <FormHelperText>{errors.password}</FormHelperText>}
              </FormControl>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit} disabled={isSubmitting}> Sign in </Button>
            </form>
          )
          }
        </Formik>
      </Paper>
    </main>
  )
}

signIn.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRouter(withStyles(styles)(signIn))
