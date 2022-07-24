import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {

  transform(value:string, ...args: string[]): unknown {
    return value.replace(args[0]," ");
  }

}
