# Instrukcja konfiguracji Cal.com - System rezerwacji

## 1. Załóż konto na Cal.com

1. Wejdź na https://cal.com/signup
2. Zarejestruj się (najłatwiej przez Google / email: saworski.uslugi@gmail.com)
3. Wybierz swój **username** (np. `saworski-it`)
   - Twój link do rezerwacji będzie: `https://cal.com/saworski-it`

## 2. Ustaw dostępność (Availability)

Wejdź w **Settings > Availability** (lub Ustawienia > Dostępność)

### Domyślny harmonogram:
| Dzień       | Godziny        |
|-------------|----------------|
| Poniedziałek | 18:30 - 20:30 |
| Wtorek       | 18:30 - 20:30 |
| Środa        | 18:30 - 20:30 |
| Czwartek     | 18:30 - 20:30 |
| Piątek       | 18:30 - 20:30 |
| Sobota       | 15:30 - 20:00 |
| Niedziela    | 12:00 - 20:00 |

### Dni wolne (edytowanie miesiąca):
Kiedy masz wolny dzień z pracy głównej i chcesz przyjmować wizyty wcześniej:
1. Wejdź w **Availability > Date overrides** (Nadpisania dat)
2. Kliknij konkretny dzień w kalendarzu
3. Ustaw godziny **12:00 - 20:00**
4. Możesz to robić z wyprzedzeniem na cały miesiąc

### Blokowanie dni:
Jeśli w dany dzień NIE chcesz przyjmować wizyt:
1. W **Date overrides** wybierz dzień
2. Zaznacz **Unavailable** (Niedostępny)

## 3. Utwórz typy wizyt (Event Types)

Wejdź w **Event Types** i utwórz następujące wizyty:

### 3.1 Korepetycje
- **Nazwa:** Korepetycje (smartfon/komputer)
- **Czas trwania:** 60 minut
- **Opis:** Nauka obsługi smartfona, komputera, aplikacji, AI. Cena: 100 zł/h.
- **Slug (link):** korepetycje

### 3.2 Nowy telefon
- **Nazwa:** Konfiguracja i transfer danych - nowy telefon
- **Czas trwania:** 60 minut
- **Opis:** Konfiguracja nowego telefonu, zgrywanie danych ze starego. Cena: 120 zł.
- **Slug:** nowy-telefon

### 3.3 Serwis komputera
- **Nazwa:** Serwis komputera
- **Czas trwania:** 120 minut
- **Opis:** Czyszczenie z wirusów, aktualizacja, reinstalacja Windows. Cena: 150 zł.
- **Slug:** serwis-komputera

### 3.4 Konfiguracja urządzeń
- **Nazwa:** Konfiguracja urządzeń
- **Czas trwania:** 60 minut
- **Opis:** Instalacja drukarek, konfiguracja routera WiFi, dekoderów. Cena: 150 zł.
- **Slug:** konfiguracja-urzadzen

### 3.5 Kamery domowe
- **Nazwa:** Kamery domowe - dobór, instalacja, konfiguracja
- **Czas trwania:** 120 minut
- **Opis:** Konsultacja, dobór, dostawa, instalacja i konfiguracja kamer. Cena: 250 zł.
- **Slug:** kamery-domowe

### 3.6 Pakiet kompleksowy
- **Nazwa:** Pakiet kompleksowy
- **Czas trwania:** 180 minut
- **Opis:** Konfiguracja sprzętów + naprawa komputera + telefon. Wszystko w jednej wizycie. Cena: 300 zł.
- **Slug:** pakiet-kompleksowy

## 4. WAŻNE: Włącz zatwierdzanie ręczne (jak Booksy!)

Dla KAŻDEGO typu wizyty:
1. Edytuj typ wizyty
2. Wejdź w **Advanced** (Zaawansowane)
3. Włącz **"Requires confirmation"** (Wymaga potwierdzenia)
4. Zapisz

Dzięki temu:
- Klient wybiera termin i rezerwuje
- TY dostajesz powiadomienie email
- Musisz ZATWIERDZIĆ lub ODRZUCIĆ rezerwację
- Klient dostaje email z potwierdzeniem dopiero po Twoim zatwierdzeniu

## 5. Połącz z Google Calendar (opcjonalne, ale zalecane)

1. Wejdź w **Settings > Calendars**
2. Połącz swój Google Calendar
3. Cal.com automatycznie zablokuje sloty kiedy masz coś w kalendarzu
4. Nowe rezerwacje będą automatycznie dodawane do kalendarza

## 6. Ustaw powiadomienia

1. Wejdź w **Settings > Notifications**
2. Upewnij się, że masz włączone:
   - Email o nowej rezerwacji
   - Email o anulowaniu
   - Przypomnienie przed wizytą

## 7. Zaktualizuj stronę internetową

Po założeniu konta Cal.com, musisz zaktualizować link na stronie:

1. Otwórz plik `index.html`
2. Znajdź linijkę:
   ```html
   src="https://cal.com/TWOJ-USERNAME"
   ```
3. Zamień `TWOJ-USERNAME` na swój username z Cal.com, np.:
   ```html
   src="https://cal.com/saworski-it"
   ```
4. Zapisz plik i wypchnij zmiany na GitHub

## 8. Dodatkowe ustawienia Cal.com

### Bufor między wizytami:
W każdym event type możesz ustawić **Buffer time** (np. 30 minut) żeby mieć przerwę między klientami.

### Minimalne wyprzedzenie:
Ustaw **Minimum notice** na np. 2-4 godziny, żeby nikt nie rezerwował "za 5 minut".

### Maksymalne wyprzedzenie:
Ustaw **Booking window** na np. 30 dni, żeby klienci mogli rezerwować max miesiąc do przodu.

### Pytania do klienta:
Możesz dodać dodatkowe pytania w formularzu rezerwacji, np.:
- "Opisz krótko problem" (pole tekstowe)
- "Adres wizyty" (wymagane pole tekstowe)

---

## Podsumowanie

Po wykonaniu kroków 1-7 Twoja strona będzie miała działający system rezerwacji:
- Klienci widzą kalendarz z wolnymi terminami
- Wybierają usługę i termin
- Ty zatwierdzasz lub odrzucasz w Cal.com (email/aplikacja)
- Klient dostaje potwierdzenie

Zarządzanie rezerwacjami: https://app.cal.com/bookings
