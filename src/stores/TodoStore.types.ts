import { Instance } from 'mobx-state-tree';
import TodoStore, { Todo } from './TodoStore';

export interface ITodoStore extends Instance<typeof TodoStore> {};
export interface ITodo extends Instance<typeof Todo> {};
