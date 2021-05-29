import React from 'react';

class HistorySummary extends React.Component {
  render() {
    const { changeInfo } = this.props

    return (
      <label>
        Resumo de sua história:
        <textarea name="historySummary" onChange={changeInfo}></textarea>
      </label>
    )
  }
}

export default HistorySummary;
