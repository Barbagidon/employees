import { Component } from "react";
import "./employers-add-form.css";

class EmployersAddForm extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { name, salary, onInput, onChange } = this.props;
    return (
      <div className="app-add-form">
        <h3>Добавьте нового сотрудника</h3>
        <form className="add-form d-flex">
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="Как его зовут?"
            name="name"
            value={name}
            onChange={(e) => onChange(e)}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="З/П в $?"
            name="salary"
            value={salary}
            onChange={(e) => onChange(e)}
          />

          <button
            type="submit"
            className="btn btn-outline-light"
            onClick={(e) => onInput(e)}
          >
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployersAddForm;
