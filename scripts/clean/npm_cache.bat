@REM Batch Script to clean npm cache.

cd ..
cd src
npm cache verify
npm cache clean
npm cache clean --force