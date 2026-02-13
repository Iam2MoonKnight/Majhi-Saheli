@echo off
echo ========================================
echo Restarting Development Server
echo ========================================
echo.

echo Step 1: Cleaning build cache...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo ✓ Cache cleared
echo.

echo Step 2: Starting development server...
echo ✓ Using Webpack (Turbopack disabled for stability)
echo.
echo ========================================
echo Server starting...
echo Open http://localhost:3000 in your browser
echo Press Ctrl+Shift+R to hard refresh
echo ========================================
echo.

npm run dev
