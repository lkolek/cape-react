import React, { PropTypes } from 'react'

function FieldGroup(props) {
  const { children, groupData, type, id, label, help } = props
  const addItemTxt = type === 'collection' ? `Add ${label} Item` : null
  function addCollectionItem(event) {
    event.preventDefault()
    groupData.addField()
  }
  return (
    <div id={type + '-container-' + id} className={'panel panel-default form-' + type}>
      { label && <div className="panel-heading"><h4>{ label }</h4></div> }
      <div className="panel-body">
      { help && <p className="help">{ help }</p> }
      { addItemTxt &&
        <button className="btn btn-success" onClick={addCollectionItem}>
          { addItemTxt }
        </button>
      }
      { groupData && !!groupData.length &&
        <span style={{ paddingLeft: '20px' }}><small>
          {`${groupData.length} Items`}
        </small></span> }
      { children ? children : <p>No Items</p>}
      </div>
    </div>
  )
}

FieldGroup.propTypes = {
  children: PropTypes.node,
  groupData: PropTypes.array,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  help: PropTypes.string,
}
FieldGroup.defaultProps = {
}
export default FieldGroup
