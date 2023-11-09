// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, onClickEvent} = props
  const {suggestion} = suggestionDetails

  const eventTrigger = () => {
    onClickEvent(suggestion)
  }

  return (
    <li className="list-style">
      <div className="suggestionContainer">
        <p className="suggestion-style">{suggestion}</p>{' '}
        <button onClick={eventTrigger} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            className="arrowIcon"
            alt="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
