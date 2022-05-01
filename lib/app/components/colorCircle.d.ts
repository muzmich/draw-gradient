import { BaseComponent } from 'oop5-js';
import chroma from "chroma-js";
export declare class ColorCirlce extends BaseComponent {
    private xPercentage;
    private yPercentage;
    private topCenter;
    private bottomCenter;
    private rightCenter;
    private leftCenter;
    init(): void;
    draw(): void;
    debug(xColor: chroma.Color, yColor: chroma.Color, blend: chroma.Color): void;
    colorControlls(): void;
}
