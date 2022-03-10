import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { AppComponent } from './app.component';
import { NgxPrintModule } from 'ngx-print';
import { FormlyFieldInput } from '@ngx-formly/bootstrap';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxPrintModule,
    FormlyModule.forRoot({
      types: [{ name: 'input', component: FormlyFieldInput }],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
      ],
    }),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
