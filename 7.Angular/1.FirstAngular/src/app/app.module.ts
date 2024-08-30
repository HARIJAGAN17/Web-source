import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { FormsModule } from '@angular/forms';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { FormChildComponent } from './childtoParent/form-child/form-child.component';
import { ListParentComponent } from './childtoParent/list-parent/list-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LessonTwoComponent,
    FormComponent,
    ListComponent,
    FormChildComponent,
    ListParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
