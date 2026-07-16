# Ghid Complet: Deploy pe Netlify (GRATIS)

## Soluție Gratuită: Netlify Forms

Am schimbat la o soluție **100% gratuită** folosind **Netlify Forms** - nu ai nevoie de Formspree sau alte servicii plătite!

---

## Pasul 1: Pregătește Repository-ul

1. Asigură-te că toate modificările sunt push-uite pe GitHub:
   ```bash
   git add .
   git commit -m "Final updates for Netlify deployment"
   git push origin main
   ```

## Pasul 2: Creează Cont pe Netlify

1. Mergi la [netlify.com](https://netlify.com)
2. Apasă "Sign up" și înregistrează-te (poți folosi contul de GitHub)
3. Este **complet gratuit** pentru site-uri statice

## Pasul 3: Conectează Repository-ul

1. După logare, apasă **"Add new site"** → **"Import an existing project"**
2. Alege **"Deploy with GitHub"**
3. Autorizează Netlify să acceseze contul tău de GitHub
4. Găsește repository-ul **ElectroVladescu** și dă click pe el
5. La **"Branch to deploy"**, asigură-te că este selectat **main**

## Pasul 4: Configurează Build-ul

Netlify va detecta automat că este un proiect Next.js. Setările ar trebui să fie:

- **Build command:** `npm run build`
- **Publish directory:** `.next`

**NU modifica aceste setări!** Configurația este deja在 fișierul `netlify.toml`.

## Pasul 5: Deploy

1. Apasă butonul **"Deploy site"** sau **"Save and deploy"**
2. Așteaptă 2-3 minute cât Netlify construiește site-ul
3. Când apare mesajul **"Published"**, site-ul tău este live!

## Pasul 6: Activează Netlify Forms (IMPORTANT!)

După ce site-ul este live:

1. Mergi la **"Site settings"** → **"Forms"**
2. Apasă **"Add form"** sau așteaptă ca Netlify să detecteze formularul automat
3. Formularul "contact" ar trebui să apară automat (este deja configurat în cod)

## Pasul 7: Configurează Notificările pe Email

Pentru a primi email-uri când cineva completează formularul:

1. În Netlify, mergi la **"Site settings"** → **"Forms"** → **"Form notifications"**
2. Apasă **"Add notification"** → **"Email notification"**
3. Configurează:
   - **Email to:** `leontevlad2175@gmail.com`
   - **Email subject:** `Nouă cerere de ofertă - ElectroVladescu`
   - **Include all form fields:** ✅ (bifează)
4. Apasă **"Save"**

## Pasul 8: Testează Formularul

1. Deschide site-ul (vei primi un link de genul `https://nume-site.netlify.app`)
2. Mergi la secțiunea de contact
3. Completează formularul cu date de test
4. Verifică email-ul `leontevlad2175@gmail.com` - ar trebui să primești mesajul

## Pasul 9: Configurează Domeniu Personalizat (Opțional)

Dacă vrei un domeniu propriu (ex: `electrovladescu.ro`):

1. În Netlify, mergi la **"Site settings"** → **"Domain management"**
2. Apasă **"Add custom domain"**
3. Introdu domeniul tău
4. Urmează instrucțiunile pentru a configura DNS-ul la providerul tău de domeniu

---

## Ce este Netlify Forms?

Netlify Forms este un serviciu **gratuit** care:
- ✅ Prelucrează automat formularele din site-ul tău
- ✅ Stochează submissions-urile în dashboard-ul Netlify
- ✅ Trimite email-uri când primești mesaje noi
- ✅ Nu necesită backend sau API-uri externe
- ✅ 100% gratuit pentru până la 100 submissions/lună

## Structura email-ului primit:

```
Nume: [numele completat]
Telefon: [numărul de telefon]
Email: [email-ul completat]
Mesaj: [mesajul completat]
```

---

## Actualizări Viitoare

Orice modificare push-uită pe GitHub (branch main) va fi automat deploy-uită pe Netlify în 1-2 minute.

## Depanare

**Dacă formularul nu funcționează:**
1. Asigură-te că site-ul este deploy-it pe Netlify (nu rulează local)
2. Verifică dacă formularul este detectat în Netlify → Forms
3. Verifică consola browser-ului (F12) pentru erori

**Dacă nu primești email-uri:**
1. Verifică setările de notificare în Netlify → Forms → Form notifications
2. Verifică spam-ul
3. Asigură-te că email-ul este corect configurat

---

## Link-uri Utile

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)