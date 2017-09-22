import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { IssueTemplateComponent } from './issue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: IssueTemplateComponent },
    ])
  ],
  declarations: [IssueTemplateComponent]
})
export class IssueTemplateModule { }
