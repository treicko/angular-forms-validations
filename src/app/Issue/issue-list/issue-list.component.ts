import { Component, OnInit } from '@angular/core';
import { issuesSaved } from './../issue-list';

@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html'
})
export class IssueListComponent {
  issues = issuesSaved;
}
