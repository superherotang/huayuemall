import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceReform'
})
export class PriceReformPipe implements PipeTransform {

  transform(value: any, args?: any): any  {
    let retVal=value.split('.');
    if(args=="0"){
      return retVal[0];
    }else if(args=="1"){
      return retVal[1];
    }else{
      throw "值只可传0或1";
    }
    
    
  }

}
