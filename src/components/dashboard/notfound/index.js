import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

export default () =>
  <Fragment>
    <Typography variant='h6' gutterBottom component='h6'>
                  Page not found :(
    </Typography>
    <Typography variant='subheading' gutterBottom component='div'>
                  Maybe the page you are looking for has been removed, or you typed in the wrong URL.
    </Typography>
  </Fragment>
