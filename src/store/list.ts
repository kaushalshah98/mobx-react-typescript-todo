import { observable, action, computed } from 'mobx';
import { INewItem } from '../shared/interface';
import { ChangeEvent, createContext } from 'react';

class DataList {
  @observable list: INewItem[] = [{ key: 0, value: 'hii' }];
  @observable newItem: INewItem = { key: 0, value: '' };

  @action onDeleteItem: any = (key: number) => {
    this.list = this.list.filter((item: INewItem) => item.key !== key);
  };

  @observable onAddItem: any = (e: ChangeEvent) => {
    e.preventDefault();
    console.log(this.newItem);
    if (this.newItem.value !== '') {
      this.list = [...this.list, this.newItem];
      console.log(this.list);
      this.newItem = { key: 0, value: '' };
    }
  };

  @observable onUpdateItem: any = (key: number, value: string) => {
    this.list.forEach((item: INewItem) => {
      if (item.key === key) {
        item.value = value;
      }
    });
  };

  @observable onHandleInput: any = (e: ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    const key = Date.now();
    this.newItem = { key, value };
  };
  @computed get totalItems() {
    return this.list.length;
  }
}

export default createContext(new DataList());

// const store = new DataList();
// export default store;
