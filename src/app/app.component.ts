import { Component, OnInit } from '@angular/core';
import * as Muuri from 'muuri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'muuri-angular';
  public notes = [
    {description: 'bla blabla bla bllabla bla blabla bla b bla111111111111111111111111111111111111' +
    '111111111 12312 3123 12321312312312 312 1111111111111 1111111111111 1111111111111 1111111111111 1111111111111 '},
    {description: 'bla bla bllabla bla blabla bla bla'},
    {description: 'bla bla blabla bla blabla bla blabla bla blabla bla blabla bla blabla bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'}];

    grid: any;
    sum = 10;
    array = [];

    async ngOnInit(): Promise<void> {
      const gridElement = document.querySelector('.grid') as HTMLElement;
      const gridItem = document.getElementsByClassName('grid-item');

      setTimeout(async () => {
        this.grid = await new Muuri.default('.grid', {
          items: '.grid-item',
          dragEnabled: true,
          layout: {
            fillGaps: false,
            horizontal: false,
            alignRight: false,
            alignBottom: false,
            rounding: true
          },
        });
        this.grid?.refreshItems().layout();
      }, 200);
    }

    // tslint:disable-next-line:typedef
    addItems(startIndex: number, endIndex: number, method: any) {
      const newELements = this.generateElements(5);

      this.grid.add(newELements);
      this.grid?.refreshItems().layout();
    }

    // tslint:disable-next-line:typedef
    generateElements(amount: number) {
      const ret = [];
      // tslint:disable-next-line:no-conditional-assignment
      for (let i = 0; i < amount; i++) {
        const item = document.getElementsByClassName('note')[0].cloneNode(true);
        const itemElem = document.createElement('div');

        itemElem.appendChild(item);
        itemElem.style.width = 'calc(100% / 2)';
        itemElem.style.position = 'absolute';
        itemElem.style.padding = '0 0.75rem 1.5rem';
        ret.push(itemElem);
      }
      return ret;
    }

    // tslint:disable-next-line:typedef
    appendItems(startIndex: number, endIndex: number) {
      this.addItems(startIndex, endIndex, 'push');
    }

    // tslint:disable-next-line:typedef
    prependItems(startIndex: number, endIndex: number) {
      this.addItems(startIndex, endIndex, 'unshift');
    }

    // tslint:disable-next-line:typedef
    onScrollDown(ev: any) {
      console.log('scrolled down!!', ev);
      // add another 20 items
      const start = this.sum;
      this.sum += 5;
      this.appendItems(start, this.sum);
      }

}
