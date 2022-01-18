# Succ

## Installation

```zsh
pnpm add succ-js
```

## Usage

```
import { succ } from 'succ-js';

console.log(succ("abcd")); // "abce"
console.log(succ("THX1138")); // "THX1139"
console.log(succ("<<koala>>")); // "<<koalb>>"
console.log(succ("<<zzzzz>>")); // "<<aaaaaa>>"
console.log(succ("<<9zzzz>>")); // "<<10aaaa>>"
console.log(succ("1999zzz")); // "2000aaa"
console.log(succ("ZZZ9999")); // "AAAA0000"
```
