import { Component } from '@angular/core';

import { IssueService } from './issue.service';

@Component({
  selector: 'app-issue-dynamic-form',
  templateUrl: './issue-dynamic-form.component.html',
  providers:  [IssueService]
})
export class IssueDynamicFormComponent {
  questions: any[];

  constructor(service: IssueService) {
    this.questions = service.getQuestions();
  }
}
