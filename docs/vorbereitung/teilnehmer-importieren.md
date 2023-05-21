---
sidebar_position: 3
---

import ReactPlayer from "react-player";

# Teilnehmer importieren

<!-- ## Video

<div className="video__wrapper">
  <ReactPlayer
    className="video__player"
    controls
    config={{
      file: {
        attributes: {
          poster:
            "https://uploads-ssl.webflow.com/60cb8d6c93a6a6dfa3b7f245/64345e1514a8f53d8aad199e_school-instructions-video-thumbnail.jpg",
        },
      },
    }}
    height="100%"
    url="https://storage.googleapis.com/files.school-app.bujus.de/school-instructions-v2-compressed.mp4"
    width="100%"
  />
</div>
­{" "} -->

## Zusammenfassung

- Nachdem Sie die Helfer hinzugefügt haben, sollten Sie die Teilnehmer importieren
- Sie können Teilnehmer auch manuell hinzufügen, allerdings ist es bei vielen einfacher, diese aus Ihrer Schülverwaltungssoftware zu importieren

### Teilnehmer hinzufügen

1. `Navigation` > `Teilnehmer` auswählen.
2. `Hinzufügen` klicken.
3. `Vorname` eingeben.
4. `Nachname` eingeben.
5. `Geschlecht` auswählen.
6. `Geburtsjahr` eingeben. Die Teilnehmer dürfen 8 - 25 Jahre alt sein (Für 2023 also 2015 - 1998).
7. Optional `Schulinterne ID` eingeben.
8. Optional `Klasse` eingeben.
9. `Hinzufügen` klicken.

### Teilnehmer importieren

1. Exportieren Sie zunächst Ihre Schülerdaten aus Ihrer Schülerverwaltungssoftware als CSV-Datei.
    - Die folgenden Spalten werden auf jeden Fall benötigt:
        - Vorname
        - Nachname
        - Geschlecht
        - Geburtsjahr
    - Diese Spalten sind optional:
        - Schulinterne ID
        - Klasse
2. Öffnen Sie jetzt die Teilnehmerübersicht in Bujus.
3. Klicken Sie oben rechts auf `Importieren` um den Import-Dialog zu öffnen.

#### Schritt 1: CSV-Datei hochladen

1. Sie haben zwei Möglichkeiten, eine CSV-Datei 
1. Als erstes sollten Sie sich die Importhilfe herunterladen. Klicken Sie dazu auf den `Importhilfe herunterladen`-Link.
2. Jetzt haben Sie 2 Möglichkeiten:
    1. Sie können die Importhilfe mit Excel öffnen und Ihre Schülerdaten in die richtigen Spalten der Tabelle kopieren.
    2. Sie können die Importhilfe mit einem Texteditor öffnen und Ihre Schülerdaten in die richtigen Spalten der Tabelle kopieren.
2. Öffnen Sie die Importhilfe mit Excel und kopieren Sie Ihre Schülerdaten in die richtigen Spalten der Tabelle rüber.
2. 
2. 
1. `CSV-Datei auswählen` klicken.
2. CSV-Datei auswählen.
3. `Weiter` klicken.

#### Schritt 2: Datei einstellen

1. Wenn die erste Zeile Ihrer CSV-Datei die Spaltennamen enthält, aktivieren Sie `Die erste Zeile enthält Spaltennamen`. Wenn nicht, deaktivieren Sie das Feld.

:::tip

**Sie sind sich unsicher?**

Unter der Checkbox sehen Sie eine Tabelle. Dies ist eine Vorschau Ihrer hochgeladenen CSV-Datei.

In der ersten Zeile der Tabelle sind in fett einmal die Spalten durchnummeriert (Spalte 1, Spalte 2, etc.)

Wenn die Zeile dadrunter noch keine Teilnehmerdaten enthält, sondern Spaltennamen wie Vorname, Geschlecht, etc. dann enthält Ihre erste Zeile Spaltennamen und Sie müssen die Checkbox aktivieren. Ansonsten nicht.

:::

#### Schritt 3: Daten auswählen

#### Mögliche Probleme

##### Umlaute werden nicht richtig angezeigt

Manchmal werden Umlaute nicht richtig importiert.

Meist liegt dies daran, dass die Umlaute schon nicht richtig aus Excel exportiert wurden.

Um das Problem zu lösen müssen Sie beim Export aus Excel zunächst ganz normal CSV-Datei wählen und dann beim Dateityp aber auf `CSV UTF-8` wechseln.

Dann sollten die Umlaute und andere spezielle Zeichen richtig exportiert werden und dann auch in Bujus korrekt angezeigt werden.
