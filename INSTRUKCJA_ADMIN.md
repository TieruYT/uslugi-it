# Instrukcja konfiguracji panelu administracyjnego

## Krok 1: Utworz projekt Firebase (5 minut)

1. Wejdz na https://console.firebase.google.com/
2. Kliknij **"Dodaj projekt"** (Add project)
3. Nazwa projektu: `uslugi-it` (lub dowolna)
4. Wylacz Google Analytics (nie potrzebujemy - mamy swoje)
5. Kliknij **"Utworz projekt"**

## Krok 2: Dodaj aplikacje webowa

1. Na stronie projektu kliknij ikone **"</>"** (Web)
2. Nazwa: `Uslugi IT Strona`
3. NIE zaznaczaj "Firebase Hosting"
4. Kliknij **"Zarejestruj aplikacje"**
5. Skopiuj dane z `firebaseConfig` - bedziesz ich potrzebowal w kroku 5

## Krok 3: Wlacz Realtime Database

1. W menu po lewej kliknij **"Realtime Database"** (w sekcji Build)
2. Kliknij **"Utworz baze danych"** (Create Database)
3. Lokalizacja: **Europe (europe-west1)**
4. Tryb: **"Rozpocznij w trybie zablokowanym"** (Locked mode)
5. Po utworzeniu, przejdz do zakladki **"Reguly"** (Rules) i wklej:

```json
{
  "rules": {
    ".read": true,
    ".write": "auth != null"
  }
}
```

6. Kliknij **"Opublikuj"** (Publish)

## Krok 4: Wlacz logowanie Email/Haslo

1. W menu po lewej kliknij **"Authentication"** (w sekcji Build)
2. Kliknij **"Rozpocznij"** (Get started)
3. Wlacz provider **"Email/Haslo"** (Email/Password)
4. Kliknij **"Zapisz"**
5. Przejdz do zakladki **"Uzytkownicy"** (Users)
6. Kliknij **"Dodaj uzytkownika"** (Add user)
7. Wpisz SWOJ email i haslo (to bedzie login do panelu admina)

## Krok 5: Wpisz dane Firebase do strony

1. Otworz plik `firebase-config.js`
2. Zastap dane tymi z kroku 2. Przyklad:

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyD...",
    authDomain: "uslugi-it-xxxxx.firebaseapp.com",
    databaseURL: "https://uslugi-it-xxxxx-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "uslugi-it-xxxxx",
    storageBucket: "uslugi-it-xxxxx.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:abcdef"
};
```

3. WAZNE: `databaseURL` musi konczyc sie na `.europe-west1.firebasedatabase.app`
   (jesli wybrales Europe w kroku 3)

## Krok 6: Commit i deploy

```bash
git add firebase-config.js
git commit -m "Konfiguracja Firebase"
git push
```

Netlify automatycznie wdrozy zmiany.

## Krok 7: Zaloguj sie do panelu

1. Wejdz na https://saworski-it.pl/admin.html
2. Zaloguj sie emailem i haslem z kroku 4
3. Gotowe!

## Jak uzywac panelu

### Promocje
- Zakładka "Promocje" -> wpisz tekst, wybierz kolor, wlacz
- Baner pojawi sie natychmiast na stronie glownej i uslugi.html
- Mozesz ustawic date wygasniecia

### Cennik
- Zakładka "Cennik" -> zmien ceny
- Kliknij "Zapisz" - ceny zaktualizuja sie na stronie I w Cal.com

### Dostepnosc
- Zakładka "Dostepnosc" -> dodaj dzien wolny
- Rezerwacje na ten dzien zostana zablokowane w Cal.com

### Statystyki
- Zakładka "Statystyki" -> linki do Google Analytics, Search Console, Cal.com, Netlify
