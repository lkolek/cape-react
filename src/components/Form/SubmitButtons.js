import React, { PropTypes } from 'react'

import Icon from '../Icon'

function SubmitButtons({ invalid, showReset, icon, text, resetForm, handleSubmit, pristine }) {
  const resetText = 'Reset'
  return (
    <div className="form-group">
      <div className="col-sm-offset-2 col-sm-10">
        <button className="btn btn-success" onClick={handleSubmit} disabled={invalid}>
          <Icon symbol={ icon || 'check' } hidden />
          { ' ' }
          { text || 'Submit' }
        </button>
        {
          showReset && resetForm &&
          <button className="btn btn-warning" onClick={resetForm} style={{ marginLeft: 15 }} disabled={pristine}>
            <Icon symbol="remove" hidden />
            { ' ' }
            { resetText }
          </button>
        }

      </div>
    </div>
  )
}

SubmitButtons.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  pristine: PropTypes.bool.isRequired,
  showReset: PropTypes.bool.isRequired,
  resetForm: PropTypes.func,
  handleSubmit: PropTypes.func.isRequired,
}

export default SubmitButtons
