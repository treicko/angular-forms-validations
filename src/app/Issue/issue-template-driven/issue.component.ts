import { Component } from '@angular/core';
import { Issue } from './../issue';
import { IssueType } from './../issue-type';

@Component({
  selector: 'app-issue-template-driven-form',
  templateUrl: './issue.component.html'
})
export class IssueTemplateComponent {

  projects = ['project 1', 'project 2'];
  issueTypes = IssueType;
  model = new Issue('', '', '', 0, '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newIssue() {
    this.model = new Issue('', '', '', 0, '');
  }

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls['name'] &&
    form.controls['name'].value; // Dr. IQ
  }
}
