import { NgModule } from '@angular/core';
import { ButtonModule } from './component/button/button/button.module';
import { MyLibComponent } from './my-lib.component';



@NgModule({
  declarations: [
    MyLibComponent,
  ],
  imports: [
    ButtonModule,
  ],
  exports: [
    MyLibComponent,
    ButtonModule
  ]
})
export class MyLibModule { }
