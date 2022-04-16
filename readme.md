# succ-js

[![npm version](https://img.shields.io/npm/v/succ-js)](https://npmjs.com/package/succ-js)

## Installation

```shell
npm install succ-js
```

## Usage

```typescript
import { succ } from 'succ-js';

console.log(succ("abcd")); // "abce"
console.log(succ("THX1138")); // "THX1139"
console.log(succ("<<koala>>")); // "<<koalb>>"
console.log(succ("<<zzzzz>>")); // "<<aaaaaa>>"
console.log(succ("<<9zzzz>>")); // "<<10aaaa>>"
console.log(succ("1999zzz")); // "2000aaa"
console.log(succ("ZZZ9999")); // "AAAA0000"
```
