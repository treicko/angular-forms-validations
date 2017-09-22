import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IssueFormReactiveComponent } from './issue-reactive-form.component';

import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: IssueFormReactiveComponent },
    ])
  ],
  declarations: [IssueFormReactiveComponent]
})
export class IssueReactiveModule { }
