@echo off
setlocal

set "APP_DIR=%~dp0"
set "PYTHON_EXE=C:\Users\HP\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe"
set "PORT=4173"

if not exist "%PYTHON_EXE%" (
  echo Bundled Python runtime was not found.
  echo Open index.html directly from this folder if needed.
  pause
  exit /b 1
)

cd /d "%APP_DIR%"
start "Quran Surah Explorer Server" /min "%PYTHON_EXE%" -m http.server %PORT%
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:%PORT%/index.html"

exit /b 0
