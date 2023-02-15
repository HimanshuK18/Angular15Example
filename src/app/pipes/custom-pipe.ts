import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'myCustomPipe',
    pure: true //pure pipe is only called when its input value changes, while an impure pipe is called on every change detection cycle
  })
  export class MyCustomPipe implements PipeTransform {
    transform(value: string, args?: any): string {
      // Transform the input value here
      const name = String(value).split(' ');
      let newName = name[0] + ' ' +name[1][0];
      return newName;
    }
  }