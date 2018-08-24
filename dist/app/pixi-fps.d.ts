/// <reference types="pixi.js" />
export declare class PixiFps extends PIXI.Container {
    private fpsTextField;
    private fpsTicker;
    private timeValues;
    private lastTime;
    constructor(fontSize?: number, textColor?: number);
    private measureFPS();
}