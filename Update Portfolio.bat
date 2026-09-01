@echo off
cd /d "D:\Desktop\MyProjects\iqra-portfolio\iqra-portfolio"

echo.
echo ==============================
echo       IQRA PORTFOLIO
echo ==============================
echo.

echo [1/3] Saving changes to GitHub...
git add .
git commit -m "Update portfolio"
git push origin main

echo.
echo [2/3] Starting portfolio server...
start "Portfolio Server" cmd /k "cd /d D:\Desktop\MyProjects\iqra-portfolio\iqra-portfolio && npm start"

echo.
echo [3/3] Opening portfolio...
timeout /t 3 /nobreak >nul
start http://localhost:3001

echo.
echo ==============================
echo          DONE!
echo ==============================
echo.
pause