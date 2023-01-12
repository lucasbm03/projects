import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import requestAPI from '../services/requestAPI';
import StarWarsContext from './StarwarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [searchValue, setSearchValue] = useState('');
  const [filterData, setFilterData] = useState([]);

  const handleChangeName = (e) => {
    setSearchValue(e.target.value);
  };

  const resultFilter = (DATA) => {
    const { column, comparison, value } = DATA;
    setFilterData([...filterData, DATA]);
    let filtered = [];
    switch (comparison) {
    case 'maior que':
      filtered = filter.filter((ele) => +ele[column] > +value);
      break;
    case 'menor que':
      filtered = filter.filter((ele) => +ele[column] < +value);
      break;
    case 'igual a':
      filtered = filter.filter((ele) => +ele[column] === +value);
      break;
    default:
      filtered = filter;
      break;
    }
    setFilter(filtered);
  };

  const reset = () => {
    setFilter(data);
  };

  const filterForReset = (dataF) => {
    let results = data;
    dataF.forEach((ele) => {
      const { column, comparison, value } = ele;
      switch (comparison) {
      case 'maior que':
        results = results.filter((e) => +e[column] > +value);
        break;
      case 'menor que':
        results = results.filter((e) => +e[column] < +value);
        break;
      case 'igual a':
        results = results.filter((e) => +e[column] === +value);
        break;

      default:
        break;
      }
    });
    setFilter(results);
  };

  const val = {
    data,
    requestAPI,
    filterData,
    setFilterData,
    handleChangeName,
    filter,
    setFilter,
    resultFilter,
    reset,
    filterForReset,
  };

  useEffect(() => {
    requestAPI().then((result) => setData(result));
  }, []);

  useEffect(() => {
    const filterResult = data.filter(
      (e) => e.name.toUpperCase().includes(searchValue.toUpperCase()),
    );
    setFilter(filterResult);
  }, [searchValue, data]);

  return <StarWarsContext.Provider value={ val }>{ children }</StarWarsContext.Provider>;
}

Provider.propTypes = {
  children: PropTypes.shape().isRequired,
};

export default Provider;
