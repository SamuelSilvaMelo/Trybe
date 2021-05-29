import React from 'react';

class HistorySummary extends React.Component {
  render() {
    const { changeInfo, historySummaryValue } = this.props;

    if (historySummaryValue.length > 100) window.alert('Resuma mais o resumo da sua história :)\nTexto muito grande!')

    return (
      <label>
        Resumo de sua história:
        <textarea name="historySummary" onChange={changeInfo}></textarea>
      </label>
    )
  }
}

export default HistorySummary;
