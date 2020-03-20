import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SiblingComponent } from './sibling/sibling.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from '../custom.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, ParentComponent, ChildComponent, SiblingComponent, CustomDirective ],
  bootstrap:    [ AppComponent ],
  providers: [DataService]
})
export class AppModule { }
