import { RGBTuple } from "discord.js";

export function hexToRgb(hex: string): RGBTuple | null {
    const match = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!match) {
        return null;
    }

    const red = parseInt(match[1], 16);
    const green = parseInt(match[2], 16);
    const blue = parseInt(match[3], 16);

    return [red, green, blue];
}