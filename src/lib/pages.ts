import fs from 'fs/promises';
import path from 'path';

export async function getPages(segments: string[]) {
	try {
		try {
			const cwd = process.cwd();
			const base = ['src', 'app'];
			const dir = await fs.readdir(path.join(cwd,...base, ...segments));
			return dir.filter(link => /.tsx$/.test(link) === false);
		} catch (e: any) {
			console.log(e);
			return [];
		}
	} catch (e: any) {
		console.error(e);
		return [];
	}
}
