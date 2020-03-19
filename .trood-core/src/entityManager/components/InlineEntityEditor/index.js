import PropTypes from 'prop-types'
import React, { PureComponent } from 'react'

import {
  registeredEntityInlineEditors,
  EntityManagerContext,
} from '../../constants'

import modalsStyle from '$trood/styles/modals.css'


class InlineEntityEditor extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,

    model: PropTypes.object.isRequired,
    modelType: PropTypes.string.isRequired,

    onSuccess: PropTypes.func,
    onDelete: PropTypes.func,
  }

  static defaultProps = {
    className: '',
  }

  render() {
    const {
      title,

      model,
      modelType,
      parents,

      onSuccess,
      onDelete,
    } = this.props

    return (
      <EntityManagerContext.Consumer>
        {({ nextParents, prevForm }) => {
          return React.createElement(registeredEntityInlineEditors[modelType], {
            className: modalsStyle.inlineForm,
            title,
            onSuccess,
            onDelete,
            entityId: model.id || model.tempId,
            isEditing: !!model.id,
            parents: parents || nextParents,
            nextParents,
            prevForm,
          })
        }}
      </EntityManagerContext.Consumer>
    )
  }
}

export default InlineEntityEditor
