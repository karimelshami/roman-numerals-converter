import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
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
export default SwitchingTabs
