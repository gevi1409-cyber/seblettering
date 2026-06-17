@echo off
REM =============================================
REM  seb-lettering — estructura de carpetas
REM =============================================

REM === APP (grupos de rutas) ===
mkdir "src\app\(site)\manifiesto"
mkdir "src\app\(site)\biblioteca\[slug]"
mkdir "src\app\(site)\autores\[slug]"
mkdir "src\app\(site)\entrelazados\[slug]"
mkdir "src\app\(site)\blog\[slug]"
mkdir "src\app\(site)\contacto"
mkdir "src\app\(admin)\admin\dashboard"
mkdir "src\app\studio\[[...tool]]"

REM === COMPONENTS ===
mkdir "src\components\ui"
mkdir "src\components\layout"
mkdir "src\components\libro"
mkdir "src\components\autor"
mkdir "src\components\blog"
mkdir "src\components\shared"

REM === SANITY ===
mkdir "src\sanity\schemas"
mkdir "src\sanity\lib"

REM === LIB ===
mkdir "src\lib"

REM === ARCHIVOS VACÍOS BASE ===
type nul > "src\sanity\sanity.config.ts"
type nul > "src\sanity\schemas\author.ts"
type nul > "src\sanity\schemas\book.ts"
type nul > "src\sanity\schemas\episode.ts"
type nul > "src\sanity\schemas\post.ts"
type nul > "src\sanity\schemas\index.ts"
type nul > "src\sanity\lib\client.ts"
type nul > "src\sanity\lib\queries.ts"
type nul > "src\sanity\lib\image.ts"
type nul > "src\lib\auth.ts"
type nul > "src\lib\utils.ts"
type nul > "src\components\layout\Header.tsx"
type nul > "src\components\layout\Footer.tsx"
type nul > "src\components\layout\Nav.tsx"
type nul > "src\components\shared\Hero.tsx"
type nul > "src\components\shared\SectionHeader.tsx"
type nul > "src\components\shared\CTABanner.tsx"

echo.
echo Estructura creada correctamente.
pause