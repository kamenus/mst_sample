import React from 'react';
import TodoStore from './TodoStore';
import { ITodoStore } from './TodoStore.types';

const StoreContext = React.createContext<ITodoStore | null>(null);
const store = TodoStore.create({});

type ITodoProviderProps = {
  children: React.ReactNode
}

const TodoProvider = (props: ITodoProviderProps) => (
  <StoreContext.Provider value={ store } >
    { props.children }
  </StoreContext.Provider>
);

export const useStore = () => React.useContext(StoreContext);

export default TodoProvider;
