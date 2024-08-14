import fs from 'fs/promises';
import path from 'path';

export async function getPages(segments: string[]) {
	try {
		const cwd = process.cwd();
		const base = ['src'];
		const dir = await fs.readdir(path.join(cwd, ...base, ...segments), {
			withFileTypes: true,
		});
		return dir
			.filter(
				(subdir) =>
					subdir.isDirectory() && /^@|\(|_/.test(subdir.name) === false,
			)
			.map(({ name: subname }) => subname);
	} catch (e: any) {
		console.error(e);
		return [];
	}
}
