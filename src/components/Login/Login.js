import React, { PropTypes } from 'react'
import { connectField } from 'redux-field'

import { schemaInfo } from '../../redux/schemaInfo'
import { fieldValidation } from '../../utils/formValidation'
import Wrapper from '../Editable/Wrapper'
const Field = connectField()(Wrapper)

import ProviderLinks from './ProviderLinks'

function Login(props) {
  const { description, gravatar, status, title, ...rest } = props
  const validators = [ ...schemaInfo.email.validators, 'isRequired' ]
  const validate = fieldValidation(validators)
  return (
    <div className="col-md-8">
      { title && <h2>{ title }</h2> }
      { description && <p className="lead">{ description }</p> }
      { !status.startsWith('token') &&
        <Field
          {...rest}
          open
          preventClose
          savingTxt="Finding your infomation..."
          validate={validate}
        />
      }
      { gravatar &&
        <img
          className="col-md-2" style={{ width: 100 }}
          src={gravatar.thumbnailUrl}
          alt={gravatar.displayName}
        />
      }
      { status === 'valid' &&
        <ProviderLinks {...rest} />
      }
      { status === 'tokenSent' &&
        <div>
          <p className="tiny"><small>
            Random image to look at while you wait for the login email.
          </small></p>
          <img src="https://unsplash.it/300" width="300" height="300" alt="placeholder" />
        </div>
      }
    </div>
  )
}

Login.propTypes = {
  description: PropTypes.string,
  emailToken: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  gravatar: PropTypes.object,
  prefix: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired,
  title: PropTypes.string,
  userId: PropTypes.string,
}
Login.defaultProps = {
}
export default Login
