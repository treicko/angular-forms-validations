import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { allowNumbersValidator } from './../shared/allow-numbers.directive';
import { allowWordsValidator } from './../shared/allow-words.directive';
import { forbiddenNameValidator } from '../shared/forbidden-name.directive';
import { IssueType } from './../issue-type';
import { Issue } from './../issue';

@Component({
  selector: 'app-issue-form-reactive',
  templateUrl: './issue-reactive-form.component.html'
})
export class IssueFormReactiveComponent implements OnInit {

  // powers = ['Really Smart', 'Super Flexible', 'Weather Changer'];

  // hero = {name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0]};

  projects = ['project 1', 'project 2'];
  issueTypes = IssueType;
  issue = new Issue(this.projects[0], this.issueTypes[0], 'some summary', 1, 'dev');

  issueForm: FormGroup;

  ngOnInit(): void {
    this.issueForm = new FormGroup({
      'project': new FormControl(this.issue.project, Validators.required),
      'issueType': new FormControl(this.issue.issueType, Validators.required),
      'summary': new FormControl(this.issue.summary, [
        Validators.required,
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      'storyPoints': new FormControl(this.issue.storyPoints, [
        Validators.required,
        Validators.min(1),
        Validators.max(100),
        allowNumbersValidator(/(^1{1}$|^2{1}$|^3{1}$|^5{1}$|^8{1}$|^13{1}$|^50{1}$|^100{1}$)/i)
      ]),
      'environments': new FormControl(this.issue.environments, [
        Validators.required,
        Validators.minLength(2),
        allowWordsValidator(/(\W|^)(qa|dev|vat|prod)(\W|$)/i)
      ]),
    });
  }

  /* get name() { return this.heroForm.get('name'); }

  get power() { return this.heroForm.get('power'); } */
}
