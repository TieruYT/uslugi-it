# ✅ Lista rzeczy do zrobienia przed uruchomieniem strony

## 🔴 KRYTYCZNE (musisz zrobić!)

### 1. Personalizacja danych kontaktowych
W pliku `index.html` zmień:

- [ ] **Email** (występuje w 3 miejscach):
  - Linia ~377: `<p><a href="mailto:twoj.email@example.com">`
  - Linia ~467: `<p>Email: twoj.email@example.com</p>`
  - Nagłówek: meta description

- [ ] **Telefon** (występuje w 3 miejscach):
  - Linia ~382: `<p><a href="tel:+48123456789">+48 123 456 789</a></p>`
  - Linia ~468: `<p>Tel: +48 123 456 789</p>`
  - Jeśli chcesz żeby klienci mogli kliknąć i zadzwonić - użyj formatu: `tel:+48600123456` (bez spacji!)

- [ ] **Miasto/obszar działania** (linia ~392):
  - Zmień "Twoje miasto i okolice" na np. "Warszawa i okolice (20km)"

- [ ] **Dostępność/godziny** (linia ~388):
  - Zmień "Pon-Pt: po 16:00" na swoje godziny

### 2. Konfiguracja formularza kontaktowego

- [ ] Zarejestruj się na **Formspree.io** (darmowe)
- [ ] Skopiuj Form ID
- [ ] Wklej Form ID w `index.html` (linia ~405):
  ```html
  <form id="contactForm" class="contact-form" action="https://formspree.io/f/TWOJ_ID" method="POST">
  ```

📖 **Szczegółowa instrukcja:** Zobacz `README.md` → Sekcja 2

---

## 🟡 WAŻNE (powinieneś zrobić)

### 3. Dostosuj cennik (opcjonalnie)
W pliku `index.html` możesz zmienić ceny w sekcji `#pricing` (od linii ~255)

Obecny cennik:
- Korepetycje: 100 zł/h
- Transfer danych: 100 zł
- Serwis PC: 150 zł
- Konfiguracja urządzeń: 150 zł
- Kamery domowe: 250 zł
- Pakiet (3h): 300 zł

### 4. Dodaj zdjęcie/logo (opcjonalnie)
Możesz dodać swoje zdjęcie w sekcji "O mnie":
- Zrób zdjęcie (profesjonalne, 300x300px)
- Zapisz jako `zdjecie.jpg` w folderze `Dzialalnosc`
- W `index.html` dodaj w sekcji `.about-text`:
  ```html
  <img src="zdjecie.jpg" alt="Twoje imię" style="border-radius: 50%; width: 200px;">
  ```

### 5. Wydrukuj umowy zlecenia
- [ ] Otwórz `ASPEKTY_PRAWNE.md`
- [ ] Skopiuj wzór umowy zlecenia
- [ ] Wklej do Worda
- [ ] Wypełnij swoje dane (imię, PESEL, adres)
- [ ] Wydrukuj **20-30 egzemplarzy**
- [ ] Noś ze sobą do klientów!

---

## 🟢 OPCJONALNE (nice to have)

### 6. Dodaj Google Analytics (statystyki odwiedzin)
- [ ] Zarejestruj się na: https://analytics.google.com
- [ ] Skopiuj tracking code
- [ ] Wklej przed `</head>` w `index.html`

### 7. Dodaj WhatsApp button
W sekcji kontaktowej dodaj:
```html
<div class="contact-item">
    <div class="contact-icon">💬</div>
    <div>
        <strong>WhatsApp</strong>
        <p><a href="https://wa.me/48600123456" target="_blank">Napisz na WhatsApp</a></p>
    </div>
</div>
```
Zmień `48600123456` na swój numer (bez +, bez spacji).

### 8. Favicon (ikonka w zakładce przeglądarki)
- [ ] Stwórz ikonę 32x32px (np. na https://favicon.io/)
- [ ] Zapisz jako `favicon.ico`
- [ ] Dodaj w `<head>`:
  ```html
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  ```

### 9. Opinie klientów
Dodaj sekcję z opiniami (gdy zbierzesz pierwsze pozytywne!)

---

## 🚀 Wdrożenie na hosting

### Wariant A: GitHub Pages (DARMOWY, bez reklam) ⭐ POLECAM
- [ ] Załóż konto na GitHub.com
- [ ] Stwórz repozytorium
- [ ] Wgraj pliki (instrukcja w `README.md` → Sekcja 3)
- [ ] Włącz GitHub Pages
- [ ] **Gotowe!** Link: `https://TWOJA-NAZWA.github.io/nazwa-repo/`

📖 **Pełna instrukcja krok po kroku:** `README.md` → Sekcja 3

### Wariant B: Netlify (DARMOWY, prostszy) ⭐ POLECAM
- [ ] Wejdź na Netlify.com
- [ ] Zarejestruj się
- [ ] Przeciągnij cały folder `Dzialalnosc` na stronę
- [ ] **Gotowe!** Link dostaniesz od razu

### Wariant C: Kup domenę (opcjonalnie, ~30 zł/rok)
- [ ] Kup domenę np. na OVH.pl (np. `jankowalski-it.pl`)
- [ ] Podłącz do GitHub Pages / Netlify
- [ ] Instrukcja w `README.md` → Sekcja 5

---

## 📋 Checklist przed ogłoszeniem strony klientom

- [ ] ✅ Strona otwiera się poprawnie w przeglądarce
- [ ] ✅ Formularz kontaktowy działa (wyślij testową wiadomość!)
- [ ] ✅ Numer telefonu w formacie `tel:+48...` (clickable)
- [ ] ✅ Email w formacie `mailto:...` (clickable)
- [ ] ✅ Wszystkie linki działają
- [ ] ✅ Strona wygląda dobrze na telefonie (otwórz na smartfonie!)
- [ ] ✅ Masz wydrukowane umowy zlecenia
- [ ] ✅ Znasz zasady działalności nierejestrowanej (limit 3200 zł/m-c)

---

## 🎯 Po uruchomieniu

### Promocja strony:
- [ ] Wydrukuj 10 **wizytówek** z linkiem do strony
  - Możesz zamówić na vista print.pl (50 sztuk = 20 zł!)
  - Wpisz: Imię, "Usługi IT", telefon, www

- [ ] W pracy (Orange) mów klientom:
  > "Prywatnie zajmuję się też pomocą IT - konfiguracja komputerów, drukarek, smartfonów. Jeśli będzie Pan/Pani potrzebować pomocy, zapraszam na moją stronę: [LINK]"

- [ ] **Nie rozdawaj wizytówek w pracy** (konflikt interesów z Orange)
- [ ] Rozdawaj znajomym, rodzinie

### Pierwsi klienci:
- [ ] Po każdym zleceniu **poproś o opinię**
  - "Jeśli Pan/Pani jest zadowolony/a, będę wdzięczny za polecenie znajomym"
- [ ] Zbierz 3-5 pozytywnych opinii
- [ ] Dodaj sekcję "Opinie" na stronie

### Marketing (za kilka miesięcy):
- [ ] Lokalne grupy FB (np. "Warszawa - ogłoszenia")
- [ ] OLX (darmowe ogłoszenie)
- [ ] Google Moja Firma (darmowe, pojawisz się w Google Maps)

---

## 💡 Protip: Pakiety i promocje

Możesz dodać na stronie promocje:
- **"Pierwsza wizyta -20%"** (zachęta dla nowych klientów)
- **"Polecisz znajomego = 50 zł zniżki"** (marketing szeptany)
- **"Senior 60+ = -30%"** (starsi klienci często potrzebują pomocy)

---

## 📞 Jeśli utknąłeś

1. **Problem z Formspree?**
   - Sprawdź czy Form ID jest poprawne
   - Wyślij testową wiadomość (powinna przyjść na email)

2. **Strona nie działa na GitHub Pages?**
   - Poczekaj 2-3 minuty po wgraniu
   - Sprawdź czy branch = "main" i folder = "/ (root)"

3. **Git nie działa?**
   - Upewnij się że zainstalowałeś Git for Windows
   - Otwórz **Git Bash** (nie zwykły CMD!)

4. **Strona źle wygląda na telefonie?**
   - Sprawdź czy masz wszystkie 3 pliki: `index.html`, `styles.css`, `script.js`
   - Otwórz w trybie incognito (może być cache)

---

**Wszystko gotowe? Czas działać! 🚀**

*Powodzenia z nową stroną i przyszłymi zleceniami!*
