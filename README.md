# Client Showcase

Eine Sammlung von Demo-Websites, die ich in Kundengesprächen zeige: sechs
Branchenseiten, eine interaktive Automatisierungs-Demo und ein vollständig
durchgespielter Angebots-Funnel.

**→ [Live ansehen](https://mark1anthony.github.io/client-showcase/)**

> **Alle Inhalte sind erfunden.** Firmennamen, Adressen, Preise, Bewertungen und
> Referenzen existieren nicht. Es gibt keine realen Kunden und keinen realen
> Geschäftsbetrieb hinter diesen Seiten. Jede Seite trägt einen entsprechenden
> Hinweis im Footer.

---

## Die Seiten

| Seite | Was es ist |
|---|---|
| [Übersicht](https://mark1anthony.github.io/client-showcase/) | Einstieg mit allen Demos |
| [restaurant/](https://mark1anthony.github.io/client-showcase/restaurant/) | Trattoria — Speisekarte, Galerie, Reservierungsformular |
| [fitness/](https://mark1anthony.github.io/client-showcase/fitness/) | Fitnessstudio — Kursplan, Trainerprofile, Probetraining |
| [salon/](https://mark1anthony.github.io/client-showcase/salon/) | Friseur- und Kosmetikstudio — Leistungen, Team, Terminanfrage |
| [steuerberater/](https://mark1anthony.github.io/client-showcase/steuerberater/) | Kanzlei — Leistungsübersicht, Team, Kontaktformular |
| [krueger-dach/](https://mark1anthony.github.io/client-showcase/krueger-dach/) | Dachdeckerbetrieb — Referenzen, Leistungen, Anfrage |
| [strahlkraft/](https://mark1anthony.github.io/client-showcase/strahlkraft/) | Gebäudereinigung — Leistungen, Ablauf, Angebotsanfrage |
| [funnel/](https://mark1anthony.github.io/client-showcase/funnel/) | **Der interessanteste Teil** — siehe unten |
| [automation/](https://mark1anthony.github.io/client-showcase/automation/) | Interaktive Demo: eine Kundenanfrage wird eingestuft und beantwortet |

## Der Funnel

Zwischen den Marketingseiten geht er leicht unter, aber technisch steckt hier die
meiste Arbeit — rund 450 Zeilen Vanilla JavaScript, ohne Framework:

- **Neun Schritte mit eigenem State**: Bedarfsanalyse, Fläche, Häufigkeit, Ort,
  Termin, Empfehlung, Upsells, Checkout, Bestätigung
- **Dynamische Preisbildung** — der Preis ergibt sich aus Leistungsart, Fläche,
  Anzahl der Wochentage und gewählten Zusatzleistungen und aktualisiert sich live
- **Wochentagsauswahl** mit Umschaltung zwischen einmalig und regelmäßig
- **Verfügbarkeitskalender** mit gesperrten Tagen, Monatsnavigation und
  Zeitfenstern
- **Upsells** mit laufender Gesamtsumme
- **Checkout-Attrappe** mit drei Zahlungsarten (es wird nichts übertragen und
  nichts berechnet)
- **Zurück-Navigation** über alle Schritte, mit Verlauf

Bedienbar mit Maus und Tastatur: die Auswahlkarten sind `role="button"` mit
`tabindex`, Enter und Leertaste lösen sie aus.

## Technik

Statisches HTML, kein Build-Schritt, kein Framework. Tailwind wird derzeit über
das CDN geladen, JavaScript ist Vanilla und liegt inline in der jeweiligen Seite.
Interaktionen laufen über Event-Delegation (`data-action`-Attribute) statt über
`onclick` im Markup.

```bash
# Lokal ansehen - es reicht ein beliebiger statischer Server
python -m http.server 8000
# oder eine Datei direkt im Browser öffnen
```

### `glanz-klar/`

Dieser Ordner enthält **eingecheckten Astro-Build-Output** (`_astro/` mit
gehashten Datei­namen), nicht den Quellcode. Er liegt hier, damit die Demo ohne
externe Abhängigkeit läuft und der Link aus der Übersicht nicht ins Leere zeigt.
Der Quellcode liegt in einem eigenen Repository.

## Barrierefreiheit

- Alle Bilder haben beschreibende `alt`-Texte
- Formularfelder sind über `for`/`id` mit ihren Labels verknüpft
- Die Auswahlelemente im Funnel sind per Tastatur bedienbar

## Bildmaterial

Die verwendeten Fotos stammen von [Unsplash](https://unsplash.com) und unterliegen
deren Lizenz. Sie sind im Markup verlinkt, nicht im Repository abgelegt.
