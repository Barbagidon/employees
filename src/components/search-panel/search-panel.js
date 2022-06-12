import "./search-panel.css";
import { Component } from "react";

class SearchPanel extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { onValueChange, term } = this.props;
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Найти сотрудника"
        name="term"
        value={term}
        onChange={(e) => onValueChange(e)}
      />
    );
  }
}

export default SearchPanel;
