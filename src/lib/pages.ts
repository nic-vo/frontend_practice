import fs from 'fs/promises';
import path from 'path';

export async function getPages(segments: string[]) {
	try {
		const cwd = process.cwd();
		const base = ['src'];
		const dir = await fs.readdir(path.join(cwd, ...base, ...segments));
		return dir.filter((link) => {
			return (
				/.tsx$/.test(link) === false &&
				/^@/.test(link) === false &&
				/.ico$/.test(link) === false
			);
		});
	} catch (e: any) {
		console.error(e);
		return [];
	}
}
