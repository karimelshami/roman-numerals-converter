import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import PropTypes from 'prop-types'

const SwitchingTabs = props => {
  const { tabs, handleChange, value, disabled } = props

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      centered
      disabled={disabled}
    >
      {tabs &&
        tabs.map(tab => (
          <Tab
            onClick={key => handleChange(tab.key)}
            key={tab.key}
            label={tab.label}
          />
        ))}
    </Tabs>
  )
}

SwitchingTabs.propTypes = {
  tabs: PropTypes.array,
  handleChange: PropTypes.func,
  value: PropTypes.number,
  disabled: PropTypes.bool
}

export default SwitchingTabs
