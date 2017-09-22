export class DynamicBase<T>{
  value: T;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  forbiddenName: string;
  allowNumbers: string;
  allowWords: string;

  constructor(options: {
      value?: T,
      key?: string,
      label?: string,
      required?: boolean,
      order?: number,
      controlType?: string,
      forbiddenName?: string,
      allowNumbers?: string,
      allowWords?: string
    } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.forbiddenName = options.forbiddenName || undefined;
    this.allowNumbers = options.allowNumbers || undefined;
    this.allowWords = options.allowWords || undefined;
  }
}
