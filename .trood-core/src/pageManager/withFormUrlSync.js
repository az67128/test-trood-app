import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import deepEqual from 'deep-equal'

import { getDisplayName } from '$trood/helpers/react'


// TODO by @deylak make this work for updating form from url(may be, we should check, if a user came from direct url)
export default (fieldsToSyncArg) => (WrappedComponent) => {
  const fieldsToSync = Array.isArray(fieldsToSyncArg) ? fieldsToSyncArg : [fieldsToSyncArg]
  class WithFormUrlSync extends PureComponent {
    static displayName = `withFormUrlSync(${getDisplayName(WrappedComponent)})`

    constructor(props) {
      super(props)

      this.syncUrl = this.syncUrl.bind(this)
    }

    componentDidMount() {
      this.syncUrl()
    }

    componentDidUpdate(prevProps) {
      const hasChanges = fieldsToSync
        .some(field => !deepEqual(prevProps.form[field], this.props.form[field]))
      if (hasChanges) this.syncUrl()
    }

    syncUrl() {
      const {
        location,
        form,
        history,
      } = this.props

      const urlChanges = fieldsToSync.reduce((memo, field) => {
        if (!deepEqual(form[field], location.query[field])) {
          return {
            ...memo,
            [field]: form[field],
          }
        }
        return memo
      }, {})

      if (Object.keys(urlChanges).length) {
        history.replace({
          pathname: location.pathname,
          query: {
            ...location.query,
            ...urlChanges,
          },
        })
      }
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
  return withRouter(WithFormUrlSync)
}
