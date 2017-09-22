import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IssueDynamicFormComponent } from './issue-dynamic-form.component';

import { RouterModule } from '@angular/router';

import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormBaseComponent } from './dynamic-form-base.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: IssueDynamicFormComponent },
    ])
  ],
  declarations: [
    IssueDynamicFormComponent,
    DynamicFormComponent,
    DynamicFormBaseComponent
  ]
})
export class IssueDynamicModule { }
