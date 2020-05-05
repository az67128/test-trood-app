import React from 'react'

import basePageLayout from '$trood/styles/basePageLayout.css'

import { RESTIFY_CONFIG } from 'redux-restify'

import Filters from './Filters'
import Search from './Search'
import Table from './Table'
import PropTypes from 'prop-types'

const TableView = ({
  tableEntities,
  tableApiActions,
  tableEditorActions = {},
  checking = false,
  editable = false,
  include = [],
  exclude = [],
  form,
  formActions,
  filters = [],
  search,
  ...restProps
}) => {
  const config = RESTIFY_CONFIG.registeredModels[tableEntities.modelType]
  return (
    <div className={basePageLayout.block}>
      <Search {...{ form, formActions, filters, search }} />
      <Filters {...{ filters, config, form, formActions, ...restProps }} />
      <Table
        {...{
          config,
          tableEntities,
          tableApiActions,
          tableEditorActions,
          checking,
          editable,
          include,
          exclude,
          form,
          formActions,
          filters,
          search,
        }}
      />
    </div>
  )
}

TableView.propTypes = {
  checking: PropTypes.bool,
  editable: PropTypes.bool,
  include: PropTypes.arrayOf(PropTypes.string),
  exclude: PropTypes.arrayOf(PropTypes.string),
  filters: PropTypes.arrayOf(PropTypes.string),
  search: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.string)]),
}
export default TableView
