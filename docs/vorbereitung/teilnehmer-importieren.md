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

Nachdem Sie die Helfer hinzugefügt haben, sollten Sie jetzt die Teilnehmer importieren. Die Teilnehmer können Sie auch wieder einzeln oder zusammen aus einer CSV-Datei importieren. Der normale Weg ist, Sie aus Ihrer Schülerverwaltungssoftware zu exportieren und dann in Bujus zu importieren.

### Teilnehmer hinzufügen

1. Gehen Sie über die Navigation zur `Teilnehmer-Übersicht`.
2. Klicken Sie oben rechts auf `Hinzufügen`. Daraufhin öffnet sich ein Dialog.
3. Geben Sie `Vorname` und `Nachname` ein.
4. Wählen Sie das `Geschlecht` aus.
5. Geben Sie das `Geburtsjahr` ein.
6. Optional können Sie noch die Schulinterne ID und/oder Klasse angeben (Um z. B. Namensgleichheiten vorzubeugen).
7. Klicken Sie unten rechts auf `Hinzufügen`.

:::info

**Wie alt dürfen Teilnehmer sein?**

Teilnehmer dürfen nur zwischen inkl. 8 und inkl. 25 Jahre alt sein dürfen. Für das Jahr 2023 berechnen sich daraus z. B. die Geburtsjahre von 1998 bis 2015.

:::

### Teilnehmer importieren

1. Öffnen Sie die `Teilnehmer-Übersicht`.
2. Klicken Sie oben rechts auf `Importieren` um den Import-Dialog zu öffnen.

#### Schritt 1: CSV-Datei vorbereiten

1. 

#### Schritt 1: CSV-Datei hochladen

1. Als erstes haben Sie die Möglichkeit über den Link `Importhilfe herunterladen` eine Importhilfe herunterzuladen. Diese können Sie dann mit Excel öffnen und dann Ihre Schülerdaten in die entsprechenden Spalten reinschreiben oder hineinkopieren.
    - Die folgenden Spalten werden auf jeden Fall benötigt:
      - Vorname
      - Nachname
      - Geschlecht
          - Das Geschlecht muss einfach nur mit m für männlich anfangen oder mit w oder f für weiblich. Groß- und Kleinschreibung spielen dabei keine Rolle.
      - Geburtsjahr
          - Das Geburtsjahr kann in verschiedenen Formaten angegeben werden. TODO
  - Diese Spalten sind optional:
      - Schulinterne ID
      - Klasse
2. Der normale Weg ist aber, dass Sie zunächst die Schülerdaten aus Ihrer Schülerverwaltungssoftware als CSV-Datei exportieren und dann in die Importhilfe hineinkopieren oder direkt als CSV-Datei hochladen
3. Wenn Sie Ihre Daten beisammen haben, klicken Sie in Bujus auf `CSV-Datei auswählen`.
4. Wählen Sie dann Ihre Datei aus.
5. Danach klicken Sie auf `Weiter`.

:::tip

Wie exportiere ich eine CSV-Datei aus Excel?

:::

#### Schritt 2: Datei einstellen

Wenn die erste Zeile Ihrer CSV-Datei Spaltennamen enthält, aktivieren Sie die Checkbox `Die erste Zeile enthält Spaltennamen`. Wenn nicht, deaktivieren Sie das Feld.

:::tip

**Enthält die erste Zeile meiner CSV-Datei Spaltennamen?**

Unter der Checkbox sehen Sie eine Tabelle. Dies ist eine Vorschau Ihrer hochgeladenen CSV-Datei.

In der ersten Zeile der Tabelle sind in fett einmal die Spalten durchnummeriert (Spalte 1, Spalte 2, etc.)

Wenn die Zeile dadrunter noch keine Teilnehmerdaten enthält, sondern Spaltennamen wie Vorname, Geschlecht, etc. dann enthält Ihre erste Zeile Spaltennamen und Sie müssen die Checkbox aktivieren. Ansonsten nicht.

:::

#### Schritt 3: Daten auswählen

Jetzt geht es darum, Bujus zu zeigen, in welcher Spalte Ihrer Datei welche Daten zu finden sind.

##### Sie haben die Importhilfe genutzt?

Wenn Sie die Importhilfe ausgefüllt haben, oder in diese Ihre Daten hineinkopiert haben, sollte in diesem Schritt schon das meiste passen.

Standardmäßig ist allerdings der Import der Schulinternen-Id und der Klasse deaktiviert. Sollten Sie diese auch importieren wollen, müssen Sie die entsprechenden Checkboxen aktivieren.

##### Sie haben Ihre eigene Datei hochgeladen?

Wenn Sie die Importhilfe nicht genutzt haben, müssen Sie wahrscheinlich alle Spalten neu zuordnen.

Dazu finden Sie oberhalb der Checkboxen und Dropdowns eine Tabelle (Spalte 1, Spalte 2, etc.)

Dann kommen die Checkboxen und Dropdowns. TODO

Darunter finden Sie eine weitere Tabelle. Dies ist eine Vorschaue der Teilnehmer, welche Sie importieren möchten.

TODO

#### Mögliche Probleme

##### Umlaute werden nicht richtig angezeigt

Manchmal werden Umlaute nicht richtig importiert.

Meist liegt dies daran, dass die Umlaute schon nicht richtig aus Excel exportiert wurden.

Um das Problem zu lösen müssen Sie beim Export aus Excel zunächst ganz normal CSV-Datei wählen und dann beim Dateityp aber auf `CSV UTF-8` wechseln.

Dann sollten die Umlaute und andere spezielle Zeichen richtig exportiert werden und dann auch in Bujus korrekt angezeigt werden.

### Teilnehmer bearbeiten

TODO

### Teilnehmer entfernen