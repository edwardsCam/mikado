Math.PI_half = Math.PI / 2;

Math.randomInRange = function (min, max) {
	return min + Math.random() * (max - min);
};

/**
    interpolate:
        Linear interpolation between a domain and a range.
        Given a value, output where it will fit within these boundaries.

    @param {array} domain - Two values for min and max X.
    @param {array}  range - Two values for min and max Y.
    @param {number} value - The value to interpolate within the domain.

    Example:
        domain: [0, 5]
        range: [0, 100]
        value: 3
        output: 60
**/
Math.interpolate = function (domain, range, value) {
	const [x1, x2] = domain;
	const [y1, y2] = range;
	const min = Math.min(y1, y2);
	const max = Math.max(y1, y2);
	const result = y1 + ((y2 - y1) * (value - x1)) / (x2 - x1);
	return Math.bound(min, max, result);
};

/**
	interpolateSmooth:
		Sinusoidal interpolation between a domain and a range.
		Essentially the same as Math.interpolate, but with a softer transition.

        Like this:             rather than this:
                 ___
               /                  /
             /                   /
        ___/                    /
*/
Math.interpolateSmooth = function (domain, range, value) {
	const [x1, x2] = domain;
	const [y1, y2] = range;
	if (value > x2) return y2;
	if (value < x1) return y1;
	if (x1 === x2) return y1;

	const min = Math.min(y1, y2);
	const max = Math.max(y1, y2);

	const period = Math.PI / (x2 - x1);
	const sinArg = (period * (value - x1)) - Math.PI_half;
	const result = Math.interpolate([-1, 1], [y1, y2], Math.sin(sinArg));
	return Math.bound(min, max, result);
};

/**
	bound:
		Return the given value, constrained by a min and max.
*/
Math.bound = function (min, max, value) {
	if (value <= min) return min;
	if (value >= max) return max;
	return value;
};
