import React from 'react';
import { observer } from 'mobx-react';
import { ITodo } from '../stores/TodoStore.types';
import './TodoItem.scss';
import cx from 'classnames';

interface ITodoItemProps {
  todo: ITodo,
}

const TodoItem = (props: ITodoItemProps) => {
  const { done, title, remove, toggle } = props.todo;

  return (
    <div className={ cx('todo', done ? 'todo_done' : '') }>
      <h2>{ title }</h2>
      <button onClick={ remove }>Remove</button>
      <button onClick={ toggle }>Toggle</button>
    </div>
  )
}

export default observer(TodoItem);
