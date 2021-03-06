import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Muuri from 'muuri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'muuri-angular';

  @ViewChild('virtual') virtualScroll: ElementRef | undefined;

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
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'},
    {description: 'bla bla blabla bla a bla bla'}];


    grid: any;

    ngAfterViewInit(): void {
      this.virtualScroll.elementScrolled()
      .subscribe(() => {
        this.grid?.refreshItems().layout();
      });
    }
    ngOnInit(): void{
      setTimeout(async () => {
        this.grid = await new Muuri.default('.cdk-virtual-scroll-content-wrapper', {
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
      }, 500);
    }

    scrolledDirective(value: any): void {
      console.log(value);
    }

}
