import chroma from 'chroma-js';

export function toRgbString(color: chroma.Color): string {
  return `rgb(${Object.values(color.rgb()).join(',')})`;
}