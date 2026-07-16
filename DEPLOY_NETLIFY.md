# Ghid Complet: Deploy pe Netlify

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

**NU modifica aceste setări!** Configurația este deja în fișierul `netlify.toml`.

## Pasul 5: Adaugă Variabila de Mediu (IMPORTANT!)

În aceeași pagină de configurare:

1. Apasă **"Add variable"** sau mergi la **"Environment variables"**
2. Adaugă variabila:
   - **Key:** `FORMSPREE_ENDPOINT`
   - **Value:** `https://formspree.io/f/xreneonr`
3. Apasă **"Save"** sau **"Add"**

⚠️ **Această variabilă este CRITICĂ** - fără ea, formularul de contact nu va funcționa!

## Pasul 6: Deploy

1. Apasă butonul **"Deploy site"** sau **"Save and deploy"**
2. Așteaptă 2-3 minute cât Netlify construiește site-ul
3. Când apare mesajul **"Published"**, site-ul tău este live!

## Pasul 7: Testează Formularul

1. Deschide site-ul (vei primi un link de genul `https://nume-site.netlify.app`)
2. Mergi la secțiunea de contact
3. Completează formularul cu date de test
4. Verifică email-ul `leontevlad2175@gmail.com` - ar trebui să primești mesajul

## Pasul 8: Configurează Domeniu Personalizat (Opțional)

Dacă vrei un domeniu propriu (ex: `electrovladescu.ro`):

1. În Netlify, mergi la **"Site settings"** → **"Domain management"**
2. Apasă **"Add custom domain"**
3. Introdu domeniul tău
4. Urmează instrucțiunile pentru a configura DNS-ul la providerul tău de domeniu

## Actualizări Viitoare

Orice modificare push-uită pe GitHub (branch main) va fi automat deploy-uită pe Netlify în 1-2 minute.

## Verificări Importante

- ✅ Formularul de contact funcționează
- ✅ Toate imaginile se încarcă corect
- ✅ Site-ul este responsive (arată bine pe mobil)
- ✅ SEO este configurat corect

## Depanare

**Dacă formularul nu funcționează:**
1. Verifică dacă variabila `FORMSPREE_ENDPOINT` este setată în Netlify
2. Verifică consola browser-ului (F12) pentru erori
3. Asigură-te că endpoint-ul Formspree este corect

**Dacă site-ul nu se încarcă:**
1. Verifică deployment logs în Netlify
2. Asigură-te că build-ul a fost successful
3. Încearcă să redeploy-ezi site-ul din Netlify

## Link-uri Utile

- [Netlify Documentation](https://docs.netlify.com/)
- [Next.js on Netlify](https://www.netlify.com/blog/2020/11/30/how-to-deploy-next.js-sites-to-netlify/)
- [Formspree Documentation](https://help.formspree.io/)