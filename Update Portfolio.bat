@echo off
cd /d "D:\Desktop\MyProjects\iqra-portfolio\iqra-portfolio"

echo.
echo ==============================
echo      PORTFOLIO UPDATE
echo ==============================
echo.

git add .
git commit -m "Update portfolio"
git push origin main

echo.
echo ==============================
echo       DONE!
echo ==============================
echo.
pause