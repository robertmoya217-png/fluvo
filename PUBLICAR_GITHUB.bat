@echo off
title Publicando Fluvo en GitHub Pages
cd /d "C:\Users\rober\Desktop\Nueva carpeta"

echo ========================================================
echo   SUBIENDO SITIO FLUVO A GITHUB PAGES
echo ========================================================
echo.
echo [1/2] Subiendo codigo principal a la rama main...
git push -u origin main

echo.
echo [2/2] Desplegando en la rama gh-pages de GitHub...
call npm run deploy

echo.
echo ========================================================
echo   PROCESO TERMINADO!
echo ========================================================
echo Ya puedes ir a Settings > Pages en GitHub y seleccionar 'gh-pages'.
echo Presiona cualquier tecla para cerrar esta ventana...
pause >nul
