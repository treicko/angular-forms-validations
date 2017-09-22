import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { IssueTemplateModule } from './Issue/issue-template-driven/issue-template.module';
import { IssueReactiveModule } from './Issue/issue-reactive-form/issue-reactive.module';
import { IssueDynamicModule } from './Issue/issue-dynamic-form/dynamic.module';

import { ForbiddenValidatorDirective } from './Issue/shared/forbidden-name.directive';
import { AllowNumbersValidatorDirective } from './Issue/shared/allow-numbers.directive';
import { AllowWordsValidatorDirective } from './Issue/shared/allow-words.directive';

import { AppComponent } from './app.component';
// import { DynamicFormComponent } from './Issue/issue-dynamic-form/dynamic-form.component';
// import { DynamicFormBaseComponent } from './Issue/issue-dynamic-form/dynamic-form-base.component';
// import { IssueTemplateComponent } from './Issue/issue-template-driven/issue.component';
// import { IssueFormReactiveComponent } from './Issue/issue-reactive-form/issue-reactive-form.component';
// import { IssueDynamicFormComponent } from './Issue/issue-dynamic-form/issue-dynamic-form.component';



@NgModule({
  declarations: [
    AllowNumbersValidatorDirective,
    AllowWordsValidatorDirective,
    ForbiddenValidatorDirective,
    AppComponent,
    // IssueTemplateComponent,
    // IssueFormReactiveComponent,
    // IssueDynamicFormComponent,
    // DynamicFormComponent,
    // DynamicFormBaseComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    // ReactiveFormsModule,
    AppRoutingModule,
    IssueTemplateModule,
    IssueReactiveModule,
    IssueDynamicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
