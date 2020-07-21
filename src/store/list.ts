import { observable, action, computed } from 'mobx';
import { INewItem } from '../shared/interface';
import { ChangeEvent } from 'react';

class DataList {
  @observable list: INewItem[];
  @observable newItem: INewItem;

  constructor() {
    this.list = [{ key: 0, value: 'hii' }];
    this.newItem = { key: 0, value: '' };
  }

  @action('Delete A Item from a List')
  onDeleteItem = (key: number) => {
    this.list = this.list.filter((item: INewItem) => item.key !== key);
  };

  @action('Add A Item to a List')
  onAddItem = () => {
    if (this.newItem.value !== '') {
      this.list = [...this.list, this.newItem];
      this.newItem = { key: 0, value: '' };
    }
  };

  @action('Update A Item from a List')
  onUpdateItem = (key: number, value: string) => {
    this.list.forEach((item: INewItem) => {
      if (item.key === key) {
        item.value = value;
      }
    });
  };

  @action('Change the newItem value with user input ')
  onHandleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value }: { value: string } = e.target;
    const key = Date.now();
    this.newItem = { key, value };
  };
  @computed
  get totalItems() {
    return this.list.length;
  }
}

export default new DataList();
