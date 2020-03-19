import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames'

import { messages } from '$trood/mainConstants'
import { intlObject } from '$trood/localeService'

import style from './index.css'

import { ICONS_TYPES } from '$trood/components/TIcon/constants'

import { HeaderMenu, HEADER_TYPES } from '$trood/pageManager'


class Header extends Component {
  static propTypes = {
    className: PropTypes.string,

    authActions: PropTypes.object,
  }

  static defaultProps = {
    className: '',

    authActions: {},
  }

  render() {
    const {
      className,

      authActions,
      menuRenderers,
    } = this.props

    return (
      <div {...{
        className: classNames(style.root, className),
      }} >
        <HeaderMenu {...{
          type: HEADER_TYPES.vertical,
          menuRenderers,
          additionalLinks: [
            {
              label: intlObject.intl.formatMessage(messages.logout),
              onClick: authActions.logout,
              iconType: ICONS_TYPES.logout,
              className: style.logot,
            },
          ],
        }} />
      </div>
    )
  }
}

export default Header
