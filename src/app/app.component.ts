import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // template: `
  //   <form [formGroup]="form" (ngSubmit)="submit(model)">
  //     <formly-form [model]="model" [fields]="fields">
  //       <button type="submit">Submit</button>
  //     </formly-form>
  //   </form>

  //   {{ model|json }}
  // `,
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Field 1',
        placeholder: 'Formly is terrific!',
        required: true,
      },
    },
    {
      key: 'textara',
      type: 'textarea',
      templateOptions: {
        label: 'textarea',
        placeholder: 'Formly is terrific',
        required: true,
      },
    },
  ];

  //  submit(model) {
  // console.log(model);
  // onSubmit() {
  //   if (this.form.valid) {
  //     alert(JSON.stringify(this.model, null, 2));
  //   }
  // }
  // test() {
  //   const a = document.createElement('a');
  //   document.body.appendChild(a);
  //   const blob = new Blob(['Test String'], {
  //       type: 'application/vnd.ms-excel',
  //     }),
  //     url = window.URL.createObjectURL(blob);
  //   console.log(navigator);
  //   if (
  //     navigator.appVersion.toString().indexOf('.NET') > 0 &&
  //     window.navigator.msSaveBlob
  //   ) {
  //     console.log('from Explorer', window.navigator);
  //     let val = window.navigator.msSaveBlob(blob, 'UnitDetails' + '.xlsx');
  //     console.log(val);
  //   } else {
  //     a.href = url;
  //     a.download = 'UnitDetails' + '.xslx';
  //     a.click();
  //     window.URL.revokeObjectURL(url);
  //   }
  // }
  //}
}
