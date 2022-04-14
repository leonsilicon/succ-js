import { execaCommandSync as exec } from 'execa';
import { chProjectDir, copyPackageFiles, rmDist } from 'lion-system';

rmDist();
chProjectDir(import.meta.url);
exec('tsc');
exec('tsc-alias');
await copyPackageFiles();
