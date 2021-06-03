import React from 'react'

class SelectedRegiont extends React.Component {
  render() {
    const { changeInfo  } = this.props

    return (
      <label>
      Escolha sua região:
      <select name="selectedRegion" onChange={changeInfo}>
      <option>Nordeste</option>
        <option>Nordeste</option>
        <option>Norte</option>
        <option>Sudeste</option>
        <option>Sul</option>
      </select>
    </label>
    )
  }
}

export default SelectedRegiont;
