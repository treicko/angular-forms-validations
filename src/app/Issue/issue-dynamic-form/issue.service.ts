import { Injectable } from '@angular/core';

import { DropdownDynamic } from './dynamic-dropdown';
import { DynamicBase } from './dynamic-base';
import { TextboxDynamic } from './dynamic-textbox';

import { IssueType } from './../issue-type';

@Injectable()
export class IssueService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {
    const questions: DynamicBase<any>[] = [

      new DropdownDynamic({
        key: 'project',
        label: 'Project',
        options: [
          {key: 'Project 1',  value: 'Project 1'},
          {key: 'Project 2',  value: 'Project 2'}
        ],
        required: true,
        order: 1
      }),

      new DropdownDynamic({
        key: 'issueType',
        label: 'Issue Type',
        options: this.getIssueTypesOptions(),
        required: true,
        order: 2
      }),

      new TextboxDynamic({
        key: 'summary',
        label: 'Summary',
        required: true,
        forbiddenName: 'bob',
        order: 3
      }),

      new TextboxDynamic({
        key: 'storyPoints',
        label: 'Story points',
        type: 'number',
        required: true,
        allowNumbers: '^1{1}$|^2{1}$|^3{1}$|^5{1}$|^8{1}$|^13{1}$|^50{1}$|^100{1}$',
        order: 4
      }),

      new TextboxDynamic({
        key: 'environments',
        label: 'Emvironments',
        required: true,
        allowWords: 'qa|dev|vat|prod',
        order: 5
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getIssueTypesOptions() {
    const issueTypes = IssueType;
    const optionsIssueType = [];
    issueTypes.forEach(issue => {
      optionsIssueType.push({key: issue, value: issue});
    });
    return optionsIssueType;
  }
}
