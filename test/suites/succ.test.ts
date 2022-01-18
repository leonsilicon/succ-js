import { succ } from '~/succ.js';

test('succ works', () => {
	expect(succ("abcd")).toEqual("abce");
	expect(succ("THX1138")).toEqual("THX1139");
	expect(succ("<<koala>>")).toEqual("<<koalb>>");
	expect(succ("<<zzzzz>>")).toEqual("<<aaaaaa>>");
	expect(succ("<<9zzzz>>")).toEqual("<<10aaaa>>");
	expect(succ("1999zzz")).toEqual("2000aaa");
	expect(succ("ZZZ9999")).toEqual("AAAA0000");
});
