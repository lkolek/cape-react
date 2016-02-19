import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'
import Wrapper from '../Editable/Wrapper'
const Field = connectField()(Wrapper)

import ProviderLinks from './ProviderLinks'

function Login({ auth, email, emailToken, description, field, id, title }) {
  return (
    <div>
      { title && <h2>{ title }</h2> }
      { description && <p className="lead">{ description }</p> }
      { !auth && field &&
        <Field
          field={field.email}
          formId={id}
          initialValue={email}
          open
          placeholder="you@example.com"
        />
      }
      { auth && !auth.emailingToken &&
        <ProviderLinks emailToken={emailToken} {...auth} />
      }
    </div>
  )
}

Login.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  userId: PropTypes.string,
}
Login.defaultProps = {
}
export default Login
