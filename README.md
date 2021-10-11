# v9sx

This library contains a number of additional validation rules, modifiers and injections that may be useful to [_v9s_](https://github.com/vueent/v9s/) users.

[![Build Status](https://travis-ci.com/vueent/v9sx.svg?branch=main)](https://travis-ci.com/vueent/v9sx)

## Contents

1. [Installation](#installation)
2. [Rules](#rules)
   1. [E-mail](#e-mail)
   2. [Float string](#float-string)
   3. [HEX string](#hex-string)
   4. [Integer string](#integer-string)
   5. [Russian postal code](#russian-postal-code)
3. [Modifiers](#modifiers)
4. [Injections](#injections)
5. [License](#license)

## Installation

```sh
npm install v9sx
```

## Rules

Additional rules.

### E-mail

The rule checks an E-mail validness.

```ts
import { v9s, simplify } from 'v9s';
import { email } from 'v9sx';

const check = simplify(v9s(false).use(email));

console.log(check('test@example.com')); // true
console.log(check('example.com')); // false
```

### Float string

The rule checks a float string validness.

```ts
import { v9s, simplify } from 'v9s';
import { float } from 'v9sx';

const check = simplify(v9s(false).use(float));

console.log(check('123.60')); // true
console.log(check('-123.60')); // true
console.log(check('+123.60')); // false
console.log(check('123')); // true
console.log(check('123,60')); // true
console.log(check('1 123.60')); // false
```

### HEX string

The rule checks the validness of a lowercase HEX string.

```ts
import { v9s, simplify } from 'v9s';
import { hex } from 'v9sx';

const check = simplify(v9s(false).use(hex));

console.log(check('123abc')); // true
console.log(check('123ABC')); // false
```

### Integer string

The rule checks an integer string validness.

```ts
import { v9s, simplify } from 'v9s';
import { integer } from 'v9sx';

const check = simplify(v9s(false).use(integer));

console.log(check('123456')); // true
console.log(check('123 456')); // false
console.log(check('-123456')); // true
console.log(check('123,456')); // false
```

### Russian postal code

The rule checks a Russian postal code validness.

```ts
import { v9s, simplify } from 'v9s';
import { ruPostalCode } from 'v9sx';

const check = simplify(v9s(false).use(ruPostalCode));

console.log(check('123456')); // true
console.log(check('123-456')); // false
```

## Modifiers

Data modifiers.

## Injections

Injections that extends a behavior of _v9s_.

## LICENSE

[MIT](./LICENSE)

```

```
