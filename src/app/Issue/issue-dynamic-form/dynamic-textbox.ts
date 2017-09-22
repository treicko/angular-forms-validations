import { DynamicBase } from './dynamic-base';

export class TextboxDynamic extends DynamicBase<string> {
  controlType = 'textbox';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}
