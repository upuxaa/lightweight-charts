import { LineStyle, LineWidth } from "../renderers/draw-line";

/**
 * Represents a price line options.
 */
export interface PriceLineOptions {
	/**
	 * Price line's value.
	 *
	 * @defaultValue `0`
	 */
	price: number;
	/**
	 * Price line's color.
	 *
	 * @defaultValue `''`
	 */
	color: string;
	/**
	 * Price line's width in pixels.
	 *
	 * @defaultValue `1`
	 */
	lineWidth: LineWidth;
	/**
	 * Price line's style.
	 *
	 * @defaultValue {@link LineStyle.Solid}
	 */
	lineStyle: LineStyle;
	/**
	 * Display line.
	 *
	 * @defaultValue `true`
	 */
	lineVisible: boolean;
	/**
	 * Display the current price value in on the price scale.
	 *
	 * @defaultValue `true`
	 */
	axisLabelVisible: boolean;
	/**
	 * Price line's on the chart pane.
	 *
	 * @defaultValue `''`
	 */
	title: string;
	/**
	 * Whether the price line can be dragged.
	 *
	 * @defaultValue `false`
	 */
	draggable: boolean;
	/**
	 * arbitrary id
	 *
	 * @defaultValue ``
	 */
	id: string;
}
