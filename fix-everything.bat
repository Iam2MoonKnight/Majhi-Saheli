@echo off
echo ========================================
echo APPLYING YOUR LOGO COLORS
echo ========================================
echo.
echo Your Colors:
echo - Primary Navy: #1D3C78
echo - Gradient Blue: #4B86C2
echo - Deep Blue: #0A1F44
echo - Neutral Gray: #D1D3D4
echo.
echo Logo Size: 180px (HUGE!)
echo.

echo Step 1: Stopping any running servers...
taskkill /F /IM node.exe 2>nul
timeout /t 2 /nobreak >nul
echo.

echo Step 2: Cleaning cache...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache
echo ✓ Cache cleared
echo.

echo Step 3: Starting server with your colors...
echo.
echo ========================================
echo AFTER SERVER STARTS:
echo 1. Open http://localhost:3000
echo 2. Press Ctrl+Shift+R (hard refresh)
echo 3. See your navy blue theme!
echo ========================================
echo.

npm run dev
