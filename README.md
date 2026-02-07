<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# increwstdev

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute an [exponentially weighted standard deviation][moving-average] incrementally.

<section class="intro">

An [exponentially weighted variance][moving-average] can be defined recursively as

<!-- <equation class="equation" label="eq:exponentially_weighted_variance" align="center" raw="S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}" alt="Recursive definition for computing an exponentially weighted variance."> -->

```math
S_n = \begin{cases} 0 & \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) & \textrm{if}\ n > 0 \end{cases}
```

<!-- <div class="equation" align="center" data-raw-text="S_n = \begin{cases} 0 &amp; \textrm{if}\ n = 0 \\ (1 - \alpha) (S_{n-1} + \alpha(x_n - \mu_{n-1})^2) &amp; \textrm{if}\ n &gt; 0 \end{cases}" data-equation="eq:exponentially_weighted_variance">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@b6bfc5be3086b5ddfeed2311afee7c9201fbdcbb/lib/node_modules/@stdlib/stats/incr/ewstdev/docs/img/equation_exponentially_weighted_variance.svg" alt="Recursive definition for computing an exponentially weighted variance.">
    <br>
</div> -->

<!-- </equation> -->

where `μ` is the [exponentially weighted mean][@stdlib/stats/incr/ewmean]. The [exponentially weighted standard deviation][moving-average] is the square root of the [exponentially weighted variance][moving-average].

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-ewstdev
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var increwstdev = require( '@stdlib/stats-incr-ewstdev' );
```

#### increwstdev( alpha )

Returns an accumulator `function` which incrementally computes an [exponentially weighted standard deviation][moving-average], where `alpha` is a smoothing factor between `0` and `1`.

```javascript
var accumulator = increwstdev( 0.5 );
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated standard deviation. If not provided an input value `x`, the accumulator function returns the current standard deviation.

```javascript
var accumulator = increwstdev( 0.5 );

var s = accumulator();
// returns null

s = accumulator( 2.0 );
// returns 0.0

s = accumulator( 1.0 );
// returns 0.5

s = accumulator( 3.0 );
// returns ~0.83

s = accumulator();
// returns ~0.83
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If provided `NaN` or a value which, when used in computations, results in `NaN`, the accumulated value is `NaN` for **all** future invocations. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var increwstdev = require( '@stdlib/stats-incr-ewstdev' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = increwstdev( 0.5 );

// For each simulated datum, update the exponentially weighted standard deviation...
for ( i = 0; i < 100; i++ ) {
    v = randu() * 100.0;
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats-incr/ewvariance`][@stdlib/stats/incr/ewvariance]</span><span class="delimiter">: </span><span class="description">compute an exponentially weighted variance incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/mstdev`][@stdlib/stats/incr/mstdev]</span><span class="delimiter">: </span><span class="description">compute a moving corrected sample standard deviation incrementally.</span>
-   <span class="package-name">[`@stdlib/stats-incr/stdev`][@stdlib/stats/incr/stdev]</span><span class="delimiter">: </span><span class="description">compute a corrected sample standard deviation incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-ewstdev.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-ewstdev

[test-image]: https://github.com/stdlib-js/stats-incr-ewstdev/actions/workflows/test.yml/badge.svg?branch=v0.2.3
[test-url]: https://github.com/stdlib-js/stats-incr-ewstdev/actions/workflows/test.yml?query=branch:v0.2.3

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-ewstdev/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-ewstdev?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-ewstdev.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-ewstdev/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-incr-ewstdev/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-incr-ewstdev/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-incr-ewstdev/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-incr-ewstdev/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-incr-ewstdev/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-incr-ewstdev/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-incr-ewstdev/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-ewstdev/main/LICENSE

[moving-average]: https://en.wikipedia.org/wiki/Moving_average

[@stdlib/stats/incr/ewmean]: https://github.com/stdlib-js/stats-incr-ewmean

<!-- <related-links> -->

[@stdlib/stats/incr/ewvariance]: https://github.com/stdlib-js/stats-incr-ewvariance

[@stdlib/stats/incr/mstdev]: https://github.com/stdlib-js/stats-incr-mstdev

[@stdlib/stats/incr/stdev]: https://github.com/stdlib-js/stats-incr-stdev

<!-- </related-links> -->

</section>

<!-- /.links -->
