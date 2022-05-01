import { BaseComponent } from 'oop5-js';
import { normal } from 'color-blend'
import chroma from "chroma-js";
import { toRgbString } from '../../utils/chromaToRgbString';

export class ColorCirlce extends BaseComponent {
  private xPercentage: number;
  private yPercentage: number;


  private topCenter = 'green';
  private bottomCenter = 'blue';
  private rightCenter = 'red';
  private leftCenter = 'purple';

  init(): void {
    this.colorControlls();
    this.app.noStroke();
  }

  draw(): void {
    this.xPercentage = parseFloat(this.app.map(this.app.mouseX, 0, this.app.width, 0, 1, true).toFixed(5));
    this.yPercentage = parseFloat(this.app.map(this.app.mouseY, 0, this.app.height, 0, 1, true).toFixed(5));

    const xColor = chroma.mix(this.leftCenter, this.rightCenter, this.xPercentage, 'rgb');
    const yColor = chroma.mix(this.topCenter, this.bottomCenter, this.yPercentage, 'rgb');

    const blend = chroma.mix(yColor, xColor, 0.5, 'rgb');

    if (this.app.mouseIsPressed) {
      this.app.fill(toRgbString(blend))
      this.app.circle(this.app.mouseX, this.app.mouseY, 300);
    }

    // this.debug(xColor, yColor, blend);
  }

  debug(xColor: chroma.Color, yColor: chroma.Color, blend: chroma.Color) {
    this.app.background(0);
    let mouseX = this.app.mouseX;
    let mouseY = this.app.mouseY;

    this.app.noFill();
    this.app.circle(mouseX, mouseY, 50);

    this.app.fill(toRgbString(xColor))
    this.app.rect(mouseX + 100, mouseY, 50, 50)

    this.app.fill(toRgbString(yColor))
    this.app.rect(mouseX + 100, mouseY - 50, 50, 50)

    this.app.fill(toRgbString(blend))
    this.app.rect(mouseX + 150, mouseY - 25, 50, 50)
  }

  colorControlls() {
    const e1 = this.app.createColorPicker(this.topCenter).position(this.app.width / 2, 0).id('topCenter');
    const e2 = this.app.createColorPicker(this.leftCenter).position(0, this.app.height / 2).id('leftCenter');
    const e3 = this.app.createColorPicker(this.bottomCenter).position(this.app.width / 2, this.app.height).addClass('b-controll').id('bottomCenter');
    const e4 = this.app.createColorPicker(this.rightCenter).position(this.app.width, this.app.height / 2).addClass('r-controll').id('rightCenter');

    [e1, e2, e3, e4].forEach(el => {
      el.elt.addEventListener('change', (e) => {
        this[e.target.id] = e.target.value;
        this.app.background(0);
      });
    })
  }


}