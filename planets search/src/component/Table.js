import React, { useContext } from 'react';
import Filter from './Filter';
import StarWarsContext from '../context/StarwarsContext';

function Table() {
  const { filter, handleChangeName } = useContext(StarWarsContext);

  return (
    <div>
      <label htmlFor="filters">
        <input
          type="text"
          name="filters"
          placeholder="procurar"
          data-testid="name-filter"
          onChange={ handleChangeName }

        />
      </label>
      <Filter />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>

          {
            filter && filter.map((ele, index) => (
              <tr key={ index }>
                <td>{ele.name}</td>
                <td>{ele.rotation_period}</td>
                <td>{ele.orbital_period}</td>
                <td>{ele.diameter}</td>
                <td>{ele.climate}</td>
                <td>{ele.gravity}</td>
                <td>{ele.terrain}</td>
                <td>{ele.surface_water}</td>
                <td>{ele.population}</td>
                <td>
                  {ele.films.map((movie) => <p key={ movie }>{movie}</p>)}
                </td>
                <td>{ele.created}</td>
                <td>{ele.edited}</td>
                <td>{ele.url}</td>
              </tr>
            ))
          }

        </tbody>
      </table>
    </div>
  );
}

export default Table;
