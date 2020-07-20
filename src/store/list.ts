import { observable, action, computed } from 'mobx';
import { INewItem } from '../shared/interface';
import { ChangeEvent, createContext } from 'react';

class DataList {
  @observable list: INewItem[] = [
    { key: 0, value: 'hii' },
    { key: 1, value: 'hiiii' },
  ];
  @observable newItem: INewItem = { key: 0, value: '' };

  @action onDeleteItem = (key: number) => {
    this.list = this.list.filter((item: INewItem) => item.key !== key);
  };

  @observable onAddItem = (e: ChangeEvent) => {
    e.preventDefault();
    if (this.newItem.value !== '') {
      this.list = [...this.list, this.newItem];
      this.newItem = { key: 0, value: '' };
    }
  };

  @observable onUpdateItem = (key: number, value: string) => {
    this.list.forEach((item: INewItem) => {
      if (item.key === key) {
        item.value = value;
      }
    });
  };

  @observable handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    const key = Date.now();
    this.newItem = { key, value };
  };
}

// export default createContext(new DataList());

const store = new DataList();
export default store;
