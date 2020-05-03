import React from 'react'
import PeriodSelector from '$trood/components/PeriodSelector'
import { camelToLowerSnake, snakeToCamel } from '$trood/helpers/namingNotation'
import DropdownFilter from './DropdownFilter'
import NumberFilter from './NumberFilter'
import { getInterval } from '$trood/helpers/dateTime'
import style from './style.css'
// import PropTypes from 'prop-types'

const Filters = ({ fieldList, config, form, formActions, ...restProps }) => {
  console.log(form.amount)
  return (
    <div className={style.filterBlock}>
      {fieldList.map((fieldName) => {
        const fieldNameSnake = camelToLowerSnake(fieldName)
        const field = config.meta[fieldName]
        if (field.type === 'string') return null
        const value = form[fieldNameSnake]
        const onChange = (val) => formActions.changeField(fieldNameSnake, val)
        if (field.linkType) {
          const linkName = snakeToCamel(field.linkMeta)
          const modelEntities = restProps[`${linkName}Entities`]

          if (!modelEntities) return null

          const modelApiActions = restProps[`${linkName}ApiActions`]
          return <DropdownFilter {...{ value, fieldName, onChange, modelEntities, modelApiActions }} />
        }
        if (field.type === 'datetime') {
          const periodValue = value || {}
          return (
            <PeriodSelector
              {...{
                label: fieldName,
                periodType: periodValue.periodType,
                startDate: periodValue.startDate,
                endDate: periodValue.endDate,
                onSubmit: ({ startDate, endDate, periodType }) =>
                  onChange({
                    startDate,
                    endDate,
                    periodType: periodType || periodValue.periodType,
                    interval: getInterval(startDate, endDate),
                  }),
              }}
            />
          )
        }
        if (field.type === 'number') {
          return <NumberFilter {...{ value:form[fieldNameSnake], fieldName, onChange }}/>
        }
        return (
          <div key={fieldName} className={style.filterItem}>
            {fieldName}-{field.type}
          </div>
        )
      })}
    </div>
  )
}

Filters.propTypes = {}

export default Filters
