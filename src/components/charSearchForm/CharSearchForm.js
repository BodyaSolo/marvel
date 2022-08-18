import './charSearchForm.scss'

const CharSearchForm = () => {
  return (
    <div className="char__search-form">
      <form>
        <label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
        <div className="char__search-wrapper">
          <input
          id="charName"
          name="charName"
          type="text"
          placeholder="Enter name"/>
          <button className="button button_main" type="submit">
            <div className="inner">find</div>
          </button>
        </div>
        <div className="char__search-error">This field is required</div>
      </form>
      <div>
        <div className="char__search-success">There is! Visit Thor page?</div>
        <button className="button button__secondary">
          <div className="inner">To page</div>
        </button>
      </div>
      <div className="char__search-error">The character was not found. Check the name and try again</div>
      <div className="char__search-critical-error">Not Found</div>
    </div>
  )
}

export default CharSearchForm;