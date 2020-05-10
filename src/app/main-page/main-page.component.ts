import { UpdateEvent } from './../budget-item-list/budget-item-list.component';
import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.models';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget: number = 0;

  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }

  deleteItem(item: BudgetItem) {
    let index = this.budgetItems.indexOf(item);
    this.totalBudget -= item.amount;
    this.budgetItems.splice(index, 1);
  }

  updateItem(updateEvent: UpdateEvent) {
    let item = updateEvent.old;
    let result = updateEvent.new;
    this.budgetItems[this.budgetItems.indexOf(item)] = result;
    this.totalBudget -= item.amount;
    this.totalBudget += result.amount;
  }
}
