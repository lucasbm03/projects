import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarwarsContext';

export default function Filter() {
  const data = useContext(StarWarsContext);
  const { resultFilter, filterData, setFilterData, reset, filterForReset } = data;
  const [filterOptions, setFilterOptions] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const select = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const [usedOptions, setUsedOptions] = useState(select);

  const optionsNotUsed = () => {
    const options = usedOptions.filter((ele) => ele !== filterOptions.column);
    return options;
  };

  const deleteFilter = ({ target }) => {
    const deleteFil = filterData.filter((ele) => ele.column !== target.name);
    usedOptions.push(target.name);
    setFilterData(deleteFil);
    if (deleteFil.length === 0) {
      reset();
    } else {
      filterForReset(deleteFil);
    }
  };

  const clearAllFilter = () => {
    reset();
  };

  const submitClick = () => {
    setUsedOptions(optionsNotUsed());
    resultFilter(filterOptions);
    setFilterOptions({
      ...filterOptions,
      column: optionsNotUsed()[0],
    });
  };
  const handleChangeName = ({ target }) => {
    setFilterOptions({
      ...filterOptions,
      [target.name]: target.value,
    });
  };
  return (
    <div>
      <select
        data-testid="column-filter"
        name="column"
        value={ filterOptions.column }
        onChange={ handleChangeName }
      >
        {usedOptions.map((e) => <option key={ e } value={ e }>{e}</option>)}
      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleChangeName }
        name="comparison"
        value={ filterOptions.comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ filterOptions.value }
        onChange={ handleChangeName }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => submitClick() }
      >
        Filtrar
      </button>
      {filterData.map((element) => (
        <div
          key={ element.column }
          data-testid="filter"
        >
          <p
            name={ element.column }
          >
            {`${element.column} ${element.comparison} ${element.value}`}

          </p>
          <button
            type="button"
            onClick={ deleteFilter }
            name={ element.column }
          >
            apagar filtro

          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={ clearAllFilter }
        data-testid="button-remove-filters"
      >
        limpar todos os filtros

      </button>
    </div>
  );
}
