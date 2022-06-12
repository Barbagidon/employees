import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
  constructor(props) {
    super();
  }
  render() {
    const { filterName, filter } = this.props;
    const btnsArr = [
      { name: "all", label: " Все сотрудники" },
      { name: "increase", label: "На повышение" },
      { name: "salary", label: " З/П больше 1000$" },
    ];

    const btns = btnsArr.map(({ name, label }) => {
      const claz = filter === name ? "btn btn-light" : "btn btn-outline-light";
      return (
        <button
          className={claz}
          type="buttton"
          key={name}
          name={name}
          onClick={(e) => filterName(e)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{btns}</div>;
  }
}

export default AppFilter;
