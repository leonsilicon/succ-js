/*
 * An implementation of Ruby's string.succ method.
 *
 * Returns the successor to str. The successor is calculated by incrementing characters starting
 * from the rightmost alphanumeric (or the rightmost character if there are no alphanumerics) in the
 * string. Incrementing a digit always results in another digit, and incrementing a letter results in
 * another letter of the same case.
 *
 * If the increment generates a carry, the character to the left of it is incremented. This
 * process repeats until there is no carry, adding an additional character if necessary.
 *
 * succ("abcd")      == "abce"
 * succ("THX1138")   == "THX1139"
 * succ("<<koala>>") == "<<koalb>>"
 * succ("1999zzz")   == "2000aaa"
 * succ("ZZZ9999")   == "AAAA0000"
 */

const subtractChar = (char: string, sub: string) =>
	char.codePointAt(0)! - sub.codePointAt(0)!

const isDigit = (char: string) => char >= '0' && char <= '9';
const isAlpha = (char: string) => char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z';
const isUpper = (char: string) => isAlpha(char) && char.toUpperCase() === char;

export function succ(input: string) {
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const digits = '0123456789';
	const chars = [...input];
	let carry = false;
	let lastAlphanumericCharPos = 0;
	for (let i = input.length - 1; i >= 0; i -= 1) {
		const origChar = chars[i]!;
		const curChar = origChar.toLowerCase();
		if (!isAlpha(curChar) && !isDigit(curChar)) continue;
		carry = false;
		lastAlphanumericCharPos = i;
		const isCharDigit = isDigit(curChar);
		const charToSubtract = isCharDigit ? '0' : 'a';
		const length = isCharDigit ? digits.length : alphabet.length;
		let newPos = subtractChar(curChar, charToSubtract) + 1;
		if (newPos >= length) {
			newPos -= length;
			carry = true;
		}

		chars[i] = isCharDigit ? digits[newPos]! : alphabet[newPos]!;
		if (isUpper(origChar)) chars[i] = chars[i]!.toUpperCase();
		if (!carry) break;
	}

	if (carry) {
		const lastAlphanumericChar = chars[lastAlphanumericCharPos]!;
		if (isDigit(lastAlphanumericChar)) {
			chars.splice(lastAlphanumericCharPos, 0, '1');
		} else {
			chars.splice(lastAlphanumericCharPos, 0, isUpper(lastAlphanumericChar) ? 'A' : 'a')
		}
	}

	return chars.join('');
}