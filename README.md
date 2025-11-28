# 🚀 Instrukcja wdrożenia strony internetowej

## 📋 Spis treści
1. [Personalizacja strony](#personalizacja-strony)
2. [Konfiguracja formularza kontaktowego](#konfiguracja-formularza-kontaktowego)
3. [Wdrożenie na GitHub Pages (DARMOWY hosting)](#wdrożenie-na-github-pages)
4. [Alternatywne opcje hostingu](#alternatywne-opcje-hostingu)
5. [Własna domena (opcjonalnie)](#własna-domena)

---

## 1️⃣ Personalizacja strony

### Edytuj plik `index.html`:

Otwórz plik `index.html` i zmień następujące elementy:

#### **Sekcja kontaktowa (linia ~374-395):**
```html
<!-- Znajdź i zmień: -->
<p><a href="mailto:twoj.email@example.com">twoj.email@example.com</a></p>
<!-- Na swój email: -->
<p><a href="mailto:jan.kowalski@gmail.com">jan.kowalski@gmail.com</a></p>

<!-- Znajdź i zmień: -->
<p><a href="tel:+48123456789">+48 123 456 789</a></p>
<!-- Na swój numer: -->
<p><a href="tel:+48600123456">+48 600 123 456</a></p>

<!-- Zmień obszar działania: -->
<p>Twoje miasto i okolice<br>(dojazd gratis!)</p>
<!-- Na np.: -->
<p>Warszawa i okolice (20km)<br>(dojazd gratis!)</p>
```

#### **Dostępność (linia ~388):**
```html
<p>Pon-Pt: po 16:00<br>Sobota-Niedziela: cały dzień</p>
```
Zmień na swoje godziny pracy.

#### **Meta dane (linia ~5):**
```html
<meta name="description" content="Profesjonalne usługi IT - [Twoje miasto]">
<title>Usługi IT - [Twoje Imię] - [Miasto]</title>
```

#### **Stopka (linia ~461-475):**
Zmień dane kontaktowe w stopce na te same co w sekcji kontaktowej.

---

## 2️⃣ Konfiguracja formularza kontaktowego

Używamy **Formspree** - darmowego serwisu do obsługi formularzy (50 zgłoszeń/miesiąc za darmo).

### Krok po kroku:

1. **Zarejestruj się na Formspree:**
   - Wejdź na: https://formspree.io/
   - Kliknij "Get Started" (możesz użyć konta Google)
   - Wybierz plan **FREE** (wystarczy na początek)

2. **Utwórz nowy formularz:**
   - Po zalogowaniu kliknij **"+ New Form"**
   - Nazwij formularz np. "Kontakt - Strona IT"
   - Skopiuj **Form ID** (wygląda np. tak: `xyzabc123`)

3. **Dodaj Form ID do strony:**
   - Otwórz plik `index.html`
   - Znajdź linię ~405:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/TWOJ_FORMSPREE_ID" method="POST">
   ```
   - Zmień `TWOJ_FORMSPREE_ID` na skopiowane Form ID:
   ```html
   <form id="contactForm" class="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
   ```

4. **Gotowe!** 🎉
   - Gdy ktoś wyśle formularz, dostaniesz email na adres podany przy rejestracji w Formspree
   - Możesz zmienić email odbiorcy w ustawieniach formularza na Formspree

### Zwiększ limit zgłoszeń (jeśli potrzebujesz):
- Plan GOLD ($10/miesiąc) = nielimitowane formularze
- Możesz też użyć **EmailJS** (300 emaili/miesiąc za darmo)

---

## 3️⃣ Wdrożenie na GitHub Pages (DARMOWY hosting)

GitHub Pages to w 100% darmowy hosting dla stron HTML. Bez reklam, z obsługą HTTPS!

### Krok po kroku:

#### **A. Zainstaluj Git (jeśli nie masz):**
1. Pobierz Git: https://git-scm.com/download/win
2. Zainstaluj z domyślnymi ustawieniami
3. Otwórz **Git Bash** (prawym na pulpicie → Git Bash Here)

#### **B. Utwórz konto GitHub:**
1. Wejdź na: https://github.com
2. Kliknij "Sign up" i utwórz konto
3. Potwierdź email

#### **C. Utwórz repozytorium:**
1. Zaloguj się na GitHub
2. Kliknij "+" w prawym górnym rogu → **"New repository"**
3. Wypełnij:
   - **Repository name:** `moje-uslugi-it` (lub inna nazwa)
   - **Public** (musi być publiczne dla darmowego hostingu)
   - ✅ Zaznacz "Add a README file"
4. Kliknij **"Create repository"**

#### **D. Wgraj pliki na GitHub:**

Otwórz **Git Bash** w folderze `Dzialalnosc`:
```bash
cd "C:\Users\dawio\.local\bin\Dzialalnosc"
```

Następnie wykonaj po kolei:

```bash
# 1. Zainicjuj Git
git init

# 2. Dodaj wszystkie pliki
git add .

# 3. Utwórz pierwszy commit
git commit -m "Pierwsza wersja strony"

# 4. Zmień nazwę brancha na main
git branch -M main

# 5. Połącz z repozytorium GitHub
git remote add origin https://github.com/TWOJA_NAZWA_UZYTKOWNIKA/moje-uslugi-it.git

# 6. Wypchnij pliki na GitHub
git push -u origin main
```

**UWAGA:** Zmień `TWOJA_NAZWA_UZYTKOWNIKA` na swoją nazwę użytkownika GitHub!

Przy pierwszym `git push` zostaniesz poproszony o logowanie:
- Podaj nazwę użytkownika GitHub
- Hasło: użyj **Personal Access Token** zamiast zwykłego hasła:
  1. Wejdź na: https://github.com/settings/tokens
  2. Kliknij "Generate new token (classic)"
  3. Zaznacz: `repo` (wszystkie opcje)
  4. Kliknij "Generate token"
  5. **Skopiuj token** i wklej jako hasło w Git Bash

#### **E. Włącz GitHub Pages:**
1. Wejdź na swoje repozytorium na GitHub
2. Kliknij **Settings** (zakładka na górze)
3. Z menu po lewej wybierz **Pages**
4. W sekcji "Source":
   - Branch: wybierz **main**
   - Folder: wybierz **/ (root)**
5. Kliknij **Save**
6. Poczekaj ~2 minuty
7. Odśwież stronę - zobaczysz link do swojej strony:
   ```
   https://TWOJA_NAZWA_UZYTKOWNIKA.github.io/moje-uslugi-it/
   ```

**🎉 GOTOWE! Twoja strona jest online!**

---

## 4️⃣ Alternatywne opcje hostingu (jeśli nie chcesz GitHub)

### **A. Netlify (Darmowy)**
- Limit: 100 GB ruchu/miesiąc (więcej niż wystarczające)
- Własna domena: TAK
- Instrukcja:
  1. Wejdź na: https://www.netlify.com/
  2. Zarejestruj się (możesz użyć GitHub)
  3. Przeciągnij folder `Dzialalnosc` na stronę
  4. Gotowe! Link dostaniesz od razu

### **B. Vercel (Darmowy)**
- Limit: 100 GB ruchu/miesiąc
- Własna domena: TAK
- Podobnie jak Netlify - drag & drop

### **C. 000webhost (Darmowy, polski)**
- 300 MB miejsca
- Reklamy: TAK (małe, w stopce)
- Panel: https://www.000webhost.com/

**Rekomendacja:** GitHub Pages lub Netlify - bez reklam, szybkie, stabilne.

---

## 5️⃣ Własna domena (opcjonalnie)

Jeśli chcesz mieć np. `www.jankowalski-it.pl` zamiast `.github.io`:

### Gdzie kupić domenę:
- **OVH.pl**: ~20 zł/rok za `.pl`
- **nazwa.pl**: ~40 zł/rok za `.pl`
- **home.pl**: ~30 zł/rok za `.pl`

### Jak podpiąć do GitHub Pages:
1. Kup domenę
2. W ustawieniach domeny (u dostawcy) dodaj rekordy DNS:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   CNAME: TWOJA_NAZWA.github.io
   ```
3. W GitHub Pages → Settings → Pages → Custom domain:
   - Wpisz swoją domenę (np. `www.jankowalski-it.pl`)
   - Kliknij Save
4. Zaznacz "Enforce HTTPS"
5. Poczekaj 24h na propagację DNS

---

## 📝 Aktualizacja strony w przyszłości

Gdy chcesz zmienić coś na stronie:

1. Edytuj pliki lokalnie (np. zmień cennik w `index.html`)
2. Otwórz Git Bash w folderze:
   ```bash
   cd "C:\Users\dawio\.local\bin\Dzialalnosc"
   git add .
   git commit -m "Zaktualizowałem cennik"
   git push
   ```
3. Po ~1 minucie zmiany będą widoczne na stronie!

---

## 🎨 Przyszłe usprawnienia (opcjonalnie)

- **Google Analytics**: Śledź odwiedzających
- **Facebook Pixel**: Remarketing
- **WhatsApp Button**: Szybki kontakt
- **Chatbot**: Automatyczne odpowiedzi
- **Blog**: Poradniki IT (poprawia SEO)
- **Galeria zrealizowanych projektów**
- **Opinie klientów**

---

## ❓ Pomoc

Jeśli coś nie działa:
1. Sprawdź konsolę przeglądarki (F12 → Console)
2. Upewnij się, że Form ID w Formspree jest poprawne
3. Sprawdź czy wszystkie pliki są na GitHub (index.html, styles.css, script.js)
4. Poczekaj 2-3 minuty po każdej zmianie na GitHub Pages

---

## 📞 Następne kroki

1. ✅ Spersonalizuj stronę (email, telefon, miasto)
2. ✅ Skonfiguruj Formspree
3. ✅ Wdróż na GitHub Pages
4. ✅ Przetestuj formularz kontaktowy
5. ✅ Udostępnij link klientom!
6. 💡 (Opcjonalnie) Kup domenę
7. 💡 (Opcjonalnie) Dodaj Google Analytics

**Powodzenia! 🚀**
