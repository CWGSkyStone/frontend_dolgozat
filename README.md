# Rombatlo — 0311. feladat

Rombusz területének kiszámítása két bekért átlóból: **T = e × f / 2**.
Készítő: **Szabó József, SZOFT-II/N**. Dátum: **2026-10-14**.

## Indítás
Node.js 22.12 vagy újabb 22-es verzió és npm szükséges.
```sh
npm ci
npm start
```
Megnyitás: http://localhost:4200. Fordítás: `npm run build`.

## Felépítés
Három útvonal-komponens: HomeComponent (/home), AboutComponent (/about), RombatloComponent (/rombatlo). A gyökér App a navigációt és a router-outlet elemet tartalmazza. Az <a routerLink> valódi href hivatkozást generál (RouterLinkWithHref funkció).

A reaktív űrlap kötelező, pozitív átlókat fogad el, kezeli a törtértékeket és a számábrázolási korlátokat. Azonos hosszúságegységet használj; az eredmény négyzetegység. Adatmódosításkor a régi eredmény eltűnik. A Törlés gomb alaphelyzetbe állítja az űrlapot.

Példák: e=10, f=8 → 40; e=2.5, f=4 → 5; nulla, negatív vagy üres adat → hiba.

## Források
- [Sallai András: 0311. feladat](https://szit.hu/doku.php?id=oktatas:programozas:feladatok:altalanos#feladat_0311), CC BY-SA 4.0.
- [Angular és reaktív űrlap minta](https://github.com/CWGSkyStone/Frontend_dolgozat_gyakorlas).
- [Rombusz számoló minta és szerzői fejléc](https://github.com/CWGSkyStone/web_romb).

## Leadás
A feltöltés után a tényleges GitHub-repozitórium címét másold a megfelelő Google Classroom-feladatba.
