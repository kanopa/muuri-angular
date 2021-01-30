import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VirtualScrollerDefaultOptions, VirtualScrollerModule } from 'ngx-virtual-scroller';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { vsDefaultOptionsFactory } from './func';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
  ],
  imports: [
    BrowserModule,
    VirtualScrollerModule,
    NgScrollbarModule
  ],
  providers: [
    {
      provide: 'virtual-scroller-default-options', useFactory: vsDefaultOptionsFactory
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
