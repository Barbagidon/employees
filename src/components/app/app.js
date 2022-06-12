/* eslint-disable default-case */
import { Component } from "react";
import nextId from "react-id-generator";
import "./app.css";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployersList from "../employers-list/employers-list";
import EmployersAddForm from "../employers-add-form/employers-add-form";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [
        { name: "Dima P", salary: 800, increase: true, rise: true, id: 1 },
        { name: "Gena I", salary: 3000, increase: false, rise: false, id: 2 },
        { name: "Roma V", salary: 5000, increase: false, rise: false, id: 3 },
        { name: "Ivan", salary: 6000, increase: false, rise: false, id: 4 },
      ],
      name: "",
      salary: "",
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      let index = data.findIndex((elem) => elem.id === id);
      console.log(index);
      const newData = data.filter((item, i) => {
        if (i !== +index) {
          return true;
        } else {
          return false;
        }
      });
      return {
        data: newData,
      };
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const newEmp = {
      name: this.state.name,
      salary: this.state.salary,
      increase: false,
      rise: false,
      id: nextId(),
    };
    if (newEmp.name && newEmp.salary && newEmp.name.length > 2) {
      console.log(newEmp.name.length);
      this.setState({
        data: [...this.state.data, newEmp],
      });
    }
  };

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, increase: !item.increase };
          }
          return item;
        }),
      };
    });
  };

  onToggleRise = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.map((item) => {
          if (item.id === id) {
            return { ...item, rise: !item.rise };
          }
          return item;
        }),
      };
    });
  };

  totalEmployees = () => {
    return this.state.data.length;
  };

  increaseEmployees = () => {
    const increaseEmp = this.state.data.filter((item) => {
      if (item.increase) {
        return true;
      }
    });
    return increaseEmp.length;
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  filterName = (e) => {
    this.setState(() => ({
      filter: e.target.name,
    }));
  };

  empFilter = (data, filter) => {
    switch (filter) {
      case "all":
        return data;
      case "increase":
        return data.filter((item) => {
          if (item.increase) {
            return item;
          }
        });
      case "salary":
        return data.filter((item) => {
          if (+item.salary > 1000) {
            return item;
          }
        });
      default:
        return data;
    }
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.empFilter(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo
          totalEmployees={this.totalEmployees}
          increaseEmployees={this.increaseEmployees}
        />

        <div className="search-panel">
          <SearchPanel onValueChange={this.onValueChange} term={term} />
          <AppFilter filterName={this.filterName} filter={filter} />
        </div>
        <EmployersList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
        />
        <EmployersAddForm
          onInput={this.addItem}
          name={this.state.name}
          salary={this.state.salary}
          onChange={this.onValueChange}
        />
      </div>
    );
  }
}

export default App;
