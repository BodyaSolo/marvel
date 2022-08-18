

const CharSearchForm = () => {
  return (
    <div>
      <form>
        <label>Or find a character by name:</label>
        <div>
          <input
          name="charName"
          type="text"
          placeholder="Enter name"/>
          <button>
            <div>Find</div>
          </button>
        </div>
      </form>
      <div>
        <div>There is! Visit Thor page?</div>
        <button>
          <div>To page</div>
        </button>
      </div>
      <div>The character was not found. Check the name and try again</div>
      <div>Not Found</div>
    </div>
  )
}

export default CharSearchForm;