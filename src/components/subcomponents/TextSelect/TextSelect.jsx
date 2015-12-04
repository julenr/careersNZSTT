/**
 * Created by jr1500 on 17/11/15.
 */
import './TextSelect.css';

import React from 'react';

const TextSelect = (props) => {
  var { options, active, onChange } = props

  return (
    <span className="text-select">
      <a href="javascript:void 0">
        {active}
        <span className="icon-arrow-down"></span>
      </a>
      <select className="text-select-input" onChange={(e) => props.onChange(e.target.value)} value={active}>
        {
          options.map(function mapOptions (value, key) {
            return (
                <option value={value} key={key}>{value}</option>
            )
          })
        }
      </select>
    </span>
  )
}

export default TextSelect;