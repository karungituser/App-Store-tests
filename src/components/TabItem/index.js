// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }

  const activeTabItem = isActive ? `active` : ''

  return (
    <li className="tabItem-container">
      <button
        type="button"
        className={`tab-btn ${activeTabItem}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
