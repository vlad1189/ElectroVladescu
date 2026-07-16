# Configurare Formular Contact - Primire Email-uri

## Opțiunea 1: Formspree (Recomandat - Gratuit)

Formspree este un serviciu gratuit care îți permite să primești email-uri direct de pe site fără a necesita backend complex.

### Pași de urmat:

1. **Înregistrează-te pe Formspree**
   - Mergi la [https://formspree.io](https://formspree.io)
   - Creează un cont gratuit cu email-ul tău: `leontevlad2175@gmail.com`

2. **Creează un formular nou**
   - După logare, apasă "New Form"
   - Dă-i un nume: "ElectroVladescu Contact"
   - Setează email-ul de destinație: `leontevlad2175@gmail.com`

3. **Obține endpoint-ul**
   - După crearea formularului, vei primi un URL de forma: `https://formspree.io/f/xxyyzzkk`
   - Copiază acest URL

4. **Configurează proiectul**
   - Creează un fișier `.env.local` în rădăcina proiectului (același nivel cu `package.json`)
   - Adaugă linia: `FORMSPREE_ENDPOINT=https://formspree.io/f/xxyyzzkk` (cu URL-ul tău)
   - **Important:** Nu da commit la fișierul `.env.local` (este în `.gitignore`)

5. **Testează formularul**
   - Repornește serverul de dezvoltare: `npm run dev`
   - Completează formularul de contact de pe site
   - Ar trebui să primești un email cu datele completate

## Opțiunea 2: Fallback (fără Formspree)

Dacă nu configurezi Formspree, formularul va deschide automat clientul de email ( Gmail, Outlook, etc.) cu datele completate, gata de trimis.

## Verificări importante:

- ✅ Asigură-te că fișierul `.env.local` există și conține `FORMSPREE_ENDPOINT`
- ✅ Serverul trebuie repornit după ce adaugi variabila de mediu
- ✅ Verifică spam-ul dacă nu vezi email-urile în inbox

## Structura email-ului primit:

```
Nume: [numele completat]
Telefon: [numărul de telefon]
Email: [email-ul completat sau "Necompletat"]

Mesaj:
[mesajul completat]
```

## Depanare:

Dacă formularul nu funcționează:
1. Verifică consola browser-ului (F12) pentru erori
2. Asigură-te că endpoint-ul Formspree este corect
3. Verifică dacă serverul rulează (`npm run dev`)
4. Încearcă să reîmprospătezi pagina (Ctrl+R)