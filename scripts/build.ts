import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist } from 'lionconfig';

rmDist();
chProjectDir(import.meta.url);
exec('tsc');
exec('tsc-alias');
await copyPackageFiles();
