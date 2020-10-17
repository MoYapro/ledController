import {Pipe, PipeTransform} from '@angular/core';
import {Color} from './model/color';

@Pipe({
  name: 'colorFormat'
})
export class ColorFormatPipe implements PipeTransform {

  private static transformSingleColor(colorValue: number): string {
    if (null == colorValue || -1 >= colorValue || 255 < colorValue) {
      throw new Error();
    }
    const baseValue = colorValue.toString(16).toUpperCase();
    if (baseValue.length === 1) {
      return '0'.concat(baseValue);
    } else {
      return baseValue;
    }
  }

  transform(color: Color, ...args: unknown[]): string {
    if (null === color) {
      return '';
    }
    try {
      return '#'.concat(
        ColorFormatPipe.transformSingleColor(color.red),
        ColorFormatPipe.transformSingleColor(color.green),
        ColorFormatPipe.transformSingleColor(color.blue)
      );
    } catch (e) {
      return '';
    }
  }

}
