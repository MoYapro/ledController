import {ColorFormatPipe} from './color-format.pipe';

describe('ColorFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new ColorFormatPipe();
    expect(pipe).toBeTruthy();
  });

  it('build color string', () => {
    const pipe = new ColorFormatPipe();
    expect(pipe.transform({red: 80, green: 50, blue: 20})).toEqual('#503214');
  });

  it('build color string black', () => {
    const pipe = new ColorFormatPipe();
    expect(pipe.transform({red: 0, green: 0, blue: 0})).toEqual('#000000');
  });

  it('build color string white', () => {
    const pipe = new ColorFormatPipe();
    expect(pipe.transform({red: 255, green: 255, blue: 255})).toEqual('#FFFFFF');
  });

  it('build color string empty', () => {
    const pipe = new ColorFormatPipe();
    expect(pipe.transform(null)).toEqual('');
  });

  it('build color string too large', () => {
    const pipe = new ColorFormatPipe();
    expect(pipe.transform({red: 256, green: 599, blue: 846})).toEqual('');
  });

  it('build color string negative', () => {
    const pipe = new ColorFormatPipe();
    expect(pipe.transform({red: -1, green: -1, blue: -1})).toEqual('');
  });


});
