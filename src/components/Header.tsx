import React, { useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../stores/TodoStoreContext';

const Header = () => {
  const store = useStore();
  const [title, setTitle] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e?.target?.value || '');
  }

  const handleClick = () => {
    store?.addTodo(title);
    setTitle('');
  }

  return (
    <div>
      <h1>Add todo</h1>
      <div>
        <input type="text" value={ title } onChange={ handleInputChange }/>
        <button disabled={ !title } onClick={ handleClick } >Add</button>
      </div>
    </div>
  )
}

export default observer(Header);
