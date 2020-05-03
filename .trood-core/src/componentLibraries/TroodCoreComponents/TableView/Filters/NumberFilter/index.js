import React from 'react'
import TLabel from '$trood/components/TLabel'
import TInput, { INPUT_TYPES } from '$trood/components/TInput'
import style from '../style.css'


const NumberFilter = ({ value = {}, fieldName, onChange }) => {

  return (
    <div className={style.filterItem}>
      <TLabel label={fieldName} />
      <div className={style.numberFilter}>
        <TInput
          {...{
            className: style.numberFilterMin,
            placeholder: 'Min',
            onChange: (val) => onChange({ ...value, min: val }),
            value: value.min || '',
            type: INPUT_TYPES.number,
          }}
        />
        <TInput
          {...{
            placeholder: 'Max',
            onChange: (val) => onChange({ ...value, max: val }),
            value: value.max || '',
            type: INPUT_TYPES.number,
          }}
        />
      </div>
    </div>
  )
}

export default NumberFilter
