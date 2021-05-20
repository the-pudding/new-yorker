export default function shuffle(a) {
	let i0 = 0;
	let i1 = a.length;
	let m = i1 - (i0 = +i0);
	while (m) {
		const i = Math.random() * m-- | 0, t = a[m + i0];
		a[m + i0] = a[i + i0];
		a[i + i0] = t;
	}
	return a;
}