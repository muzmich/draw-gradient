import { OOP5 } from "oop5-js";
import { ColorCirlce } from './components/colorCircle';

export class App extends OOP5 {
  protected init(): void {
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
    });
    this.components = [
      new ColorCirlce(),
    ]
  }

  protected setup(): void {
    this.app.createCanvas(this.app.windowWidth, this.app.windowHeight);
    this.app.background(0);

    this.components.forEach(c => {
      c.init();
    })
  }

  protected draw(): void {
    this.components.forEach(c => {
      c.draw();
    })
  }
}