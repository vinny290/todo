/* eslint-disable no-unused-vars */
import { Component } from 'react';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
// import './App.css';

const date1 = new Date(2023, 7, 19, 14, 5);
const date2 = new Date(2023, 7, 19, 15, 23);

const initialData = [
  {
    title: 'Изучить react',
    desc: 'Поскорее',
    image: '',
    done: true,
    createdAt: date1.toLocaleString(),
    key: date1.getTime(),
  },
  {
    title: 'написать приложение',
    desc: 'список дел',
    image: '',
    done: false,
    createdAt: date2.toLocaleString(),
    key: date2.getTime(),
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: initialData };
    this.setDone = this.setDone.bind(this);
    this.delete = this.delete.bind(this);
    this.add = this.add.bind(this);
  }

  setDone(key) {
    const deed = this.state.data.find((current) => current.key === key);
    if (deed) {
      deed.done = true;
      // eslint-disable-next-line no-unused-vars
      this.setState((state) => ({}));
    }
  }

  delete(key) {
    const newData = this.state.data.filter((current) => current.key !== key);
    this.setState((state) => ({ data: newData }));
  }

  add(deed) {
    this.state.data.push(deed);
    this.setState((state) => ({}));
  }
  render() {
    return (
      <div>
        <nav className='navbar is-light'>
          <div className='navbar-brand'>
            <span className='navbar-item is-uppercase'>Todos</span>
          </div>
        </nav>
        <main className='content px-6 mt-6'>
          <TodoList
            list={this.state.data}
            setDone={this.setDone}
            delete={this.delete}
          />
          <TodoAdd add={this.add} />
        </main>
      </div>
    );
  }
}
