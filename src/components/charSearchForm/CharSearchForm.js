import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charSearchForm.scss'

const CharSearchForm = () => {
  const [char, setChar] = useState(null);
  const { loading, error, getCharacterByName, clearError } = useMarvelService();

  const onCharLoaded = (char) => {
    setChar(char);
  }

  const updateChar = (name) => {
    clearError();

    getCharacterByName(name)
      .then(onCharLoaded);
  }

  const errorMessage = error ? <div className="char__search-critical-error"><ErrorMessage /></div> : null;
  const results = !char ? null : char.length > 0 ? 
                <div>
                  <div className="char__search-success">There is! Visit Thor page?</div>
                  <button className="button button__secondary">
                    <div className="inner">To page</div>
                  </button>
                </div> :
                <div className="char__search-error">The character was not found. Check the name and try again</div>


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
      </form>
      {results}
      {errorMessage}
    </div>
  )
}

export default CharSearchForm;