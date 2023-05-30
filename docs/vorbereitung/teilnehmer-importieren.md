---
sidebar_position: 3
---

import ReactPlayer from "react-player";

# Teilnehmer importieren

<!--

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

## Einleitung

Nachdem Sie die Helfer hinzugefügt haben, sollten Sie jetzt die Teilnehmer importieren. Die Teilnehmer können Sie auch wieder einzeln oder zusammen aus einer CSV-Datei importieren. Der normale Weg ist, Sie aus Ihrer Schülerverwaltungssoftware zu exportieren und dann in Bujus zu importieren.

## Teilnehmer hinzufügen

1. Gehen Sie über die Navigation zur `Teilnehmer-Übersicht`.
2. Klicken Sie oben rechts auf `Hinzufügen`. Daraufhin öffnet sich ein Dialog.
3. Geben Sie `Vorname` und `Nachname` ein.
4. Wählen Sie das `Geschlecht` aus.
5. Geben Sie das `Geburtsjahr` ein.
6. Optional können Sie noch die Schulinterne ID und/oder Klasse angeben (Um z. B. Namensgleichheiten vorzubeugen).
7. Klicken Sie unten rechts auf `Hinzufügen`.

<!-- :::info

**Wie alt dürfen Teilnehmer sein?**

Teilnehmer dürfen nur zwischen inkl. 8 und inkl. 25 Jahre alt sein dürfen. Für das Jahr 2023 berechnen sich daraus z. B. die Geburtsjahre von 1998 bis 2015.

::: -->

## Teilnehmer importieren

1. Öffnen Sie die `Teilnehmer-Übersicht`.
2. Klicken Sie oben rechts auf `Importieren`. Es öffnet sich ein Dialog.

### 1. CSV-Datei vorbereiten

Als erstes müssen Sie eine CSV-Datei mit den benötigten Daten vorbereiten.

Wenn Sie diese selbst in Excel erstellen möchten, können Sie sich die Importhilfe herunterladen. Klicken Sie dazu oben links auf `Importhilfe herunterladen`. Diese können sie dann mit Excel öffnen und dann Ihre Schülerdaten in die entsprechenden Spalten reinschreiben oder hineinkopieren.

Der normale Weg ist allerdings, dass Sie die Schülerdaten einfach nur aus Ihrer Schülerverwaltungssoftware als CSV-Datei exportieren.

:::tip

**Wie exportiere ich die Schülerdaten aus meiner Schülerverwaltungssoftware?**

Das ist von Schülerverwaltungssoftware zu Schülerverwaltungssoftware unterschiedlich. In den meisten Fällen gibt es aber eine Export-Funktion bei der Sie dann auch noch einstellen können, welche Daten Sie exportieren möchten und in welchem Format diese sein sollen.

Wenn Sie bei diesem Schritt hilfe benötigen, wenden Sie sich z. B. an den Verantwortlichen an Ihrer Schule oder an den [Bujus-Support](https://bujus.de#contact-section).

:::

#### Benötigte Spalten in der CSV-Datei

Eine CSV-Datei ist eigentlich nur ein universelleres Format einer Exceltabelle. Sie können also auch eine Exceltabelle als CSV-Datei exportieren.

Diese Spalten müssen in der CSV-Datei in beliebiger Reihenfolge vorhanden sein:

- Vorname
- Nachname
- Geschlecht
  - Das Geschlecht muss einfach nur mit m für männlich oder mit w oder f für weiblich anfangen. Groß- und Kleinschreibung spielen dabei keine Rolle.
- Geburtsjahr
  - Das Geburtsjahr kann als Zahl oder als Geburtsdatum in diesen Formaten angegeben werden:
    - yyyy (z. B. 2015)
    - dd.mm.yyyy (z. B. 13.01.2015 oder auch 13.1.2015)
    - mm/dd/yyyy (z. B. 01/13/2015 oder auch 1/13/2015)
    - yyyy-mm-dd (z. B. 2015-01-13 oder auch 2015-1-13)
  - Das Jahr muss immer 4-stellig sein. Tag und Monat können ein- oder zweistellig sein.

Diese Spalten sind optional:

- Schulinterne ID
- Klasse

### 2. CSV-Datei hochladen

1. Klicken Sie im Import-Dialog auf `CSV-Datei auswählen`.
2. Wählen Sie Ihre Datei aus.
3. Klicken Sie unten rechts auf `Weiter`.

### 3. Datei einstellen

1. Wenn die erste Zeile Ihrer CSV-Datei Spaltennamen enthält, aktivieren Sie die Checkbox `Die erste Zeile enthält Spaltennamen`. Wenn nicht, deaktivieren Sie das Feld.

:::tip

**Enthält die erste Zeile meiner CSV-Datei Spaltennamen?**

Unter der Checkbox sehen Sie eine Tabelle. Dies ist eine Vorschau Ihrer hochgeladenen CSV-Datei.

In der ersten Zeile der Tabelle sind in fett einmal die Spalten durchnummeriert (Spalte 1, Spalte 2, etc.)

Wenn die Zeile dadrunter noch keine Teilnehmerdaten enthält, sondern Spaltennamen wie Vorname, Geschlecht, etc. dann enthält Ihre erste Zeile Spaltennamen und Sie müssen die Checkbox aktivieren. Ansonsten nicht.

:::

### 4. Daten auswählen

Jetzt geht es darum, Bujus zu zeigen, in welcher Spalte Ihrer Datei welche Daten zu finden sind.

#### Sie haben die Importhilfe genutzt?

Wenn Sie die Importhilfe ausgefüllt haben, sollte in diesem Schritt schon das meiste passen.

Standardmäßig ist allerdings der Import der Schulinternen ID und der Klasse deaktiviert. Sollten Sie diese auch importieren wollen, müssen Sie die entsprechenden Checkboxen aktivieren.

Wenn Sie alles eingestellt haben, klicken Sie unten rechts auf `Importieren`.

#### Sie haben Ihre eigene Datei hochgeladen?

Wenn Sie die Importhilfe nicht genutzt haben, müssen Sie wahrscheinlich alle Spalten neu zuordnen.

Dazu finden Sie oberhalb der Checkboxen und Dropdowns eine Vorschau Ihrer Datei in Form einer Tabelle. Dabei sind in der ersten Zeile die Spalten durchnummeriert (Spalte 1, Spalte 2, etc.). Dadrunter sehen Sie Daten aus Ihrer Datei.

Unter der Vorschaue Ihrer Datei finden Sie die Einstellungsmöglichkeiten. Hier können Sie auswählen, in welcher Spalte welche Daten sind. Wenn Sie oben in der Vorschau z. B. sehen, dass der Vorname in Ihrer Datei in Spalte 1 ist, müssen Sie bei den Einstellungen in dem Dropdown für Vorname die Spalte 1 auswählen. Tun Sie dies für alle benötigten Daten.

Unter den Einstellungsmöglichkeiten finden Sie eine Vorschaue der Teilnehmer. In dieser Tabell können Sie kontrollieren, ob Sie Ihre Daten richtig zugeordnet haben. In der ersten Zeile sind die Felder benannt (Schulinterne ID, Vorname, etc.) In den Zeilen dadrunter werden die zugeordneten Daten aus Ihrer Datei angezeigt. Hier sollten nach der Zuordnung also z. B. nur Schulinterne IDs in der Spalte für Schulinterne IDs stehen, nur Vornamen in der Spalte für Vornamen, etc.

Standardmäßig ist der Import der Schulinternen ID und der Klasse deaktiviert. Sollten Sie diese auch importieren wollen, müssen Sie die entsprechenden Checkboxen aktivieren und dann in den Dropdowns die Spalten auswählen.

Wenn Sie alles eingestellt haben, klicken Sie unten rechts auf `Importieren`.

#### Validierungsfehler

Manchmal bekommen Sie beim Importieren Validierungsfehler. Diese werden Ihnen in Form einer Tabelle mit diesen Spalten angezeigt:

1. In welcher Zeile (bzw. bei welchem Teilnehmer) der Fehler aufgetreten ist.
2. Welches Feld nicht passt.
3. Welchen Wert Sie importieren wollten.
4. Was mit dem Wert nicht stimmt.

Wenn Sie Validierungsfehler bekommen, müssen Sie die Daten in Ihrer CSV-Datei (z. B. wieder mit Excel) korrigieren und dann erneut importieren.

### 5. Import überprüfen

Wenn beim Importieren etwas schief läuft, wird Ihnen dies nach dem Import angezeigt.

Sie können die fehlerhaften Teilnehmer dann auch exportieren. Klicken Sie dazu oben rechts auf `Exportieren`. Dadurch wird eine CSV-Datei heruntergeladen, welche Sie dann mit Excel öffnen können. In der Tabelle sehen Sie dann Ihre Daten und in der rechten Spalte auch, warum der Teilnehmer nicht importiert werden konnte. Dort können Sie die Daten dann verbessern, erneut exportieren und dann wieder in Bujus importieren.

### Mögliche Probleme

#### Umlaute werden nicht richtig angezeigt

Dies liegt meist daran, dass die Umlaute schon nicht richtig aus z. B. Excel exportiert wurden.

Um das Problem zu lösen müssen Sie beim Export aus Excel zunächst ganz normal CSV-Datei wählen und dann aber beim Abspeichern `CSV UTF-8` als Dateityp auswählen. Dann sollten die Umlaute und alle anderen speziellen Zeichen richtig exportiert werden und dann auch in Bujus korrekt angezeigt werden.

<!-- ## Teilnehmer bearbeiten

TODO

## Teilnehmer entfernen

TODO -->