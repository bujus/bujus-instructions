---
sidebar_position: 2
---

import ReactPlayer from "react-player";

# Ergebnisse eintragen

<div className="video__wrapper">
  <ReactPlayer
    className="video__player"
    controls
    height="100%"
    config={{
      file: {
        attributes: {
          poster:
            "https://storage.googleapis.com/files.bujus.de/school-app-tutorials/school-app-ergebnisse-eintragen-tutorial-thumbnail.jpg",
        },
      },
    }}
    url="https://storage.googleapis.com/files.bujus.de/school-app-tutorials/school-app-ergebnisse-eintragen-tutorial.mp4"
    width="100%"
  />
</div>

## Einleitung

Während die Bundesjugendspiele laufen, tragen die Helfer die Ergebnisse der Teilnehmer offline direkt an den Stationen in die Helfer-App ein.

Am Ende der Veranstaltung, wenn alle Ergebnisse eingetragen worden sind, laden die Helfer die Ergebnisse hoch. Es ist auch möglich, dass Helfer die Ergebnisse auch schon während der Veranstaltung mal hochladen. Danach können Sie die Ergebnisse auch in der Schul-App einsehen und auch selbst noch bearbeiten.

## Ergebnisse eintragen

1. Navigieren Sie zur `Ergebnis-Übersicht`.
2. Klicken Sie oben rechts auf `Eintragen`. Daraufhin öffnet sich ein Dialog
3. Wählen Sie den `Teilnehmer` aus.
4. Wählen Sie dann die `Disziplin` aus.
5. Geben Sie danach den `Wert` des Ergebnisses ein.
6. Optional können Sie oben noch einen `Helfer` auswählen, der dann für das Ergebnis verantwortlich ist. Bei diesem taucht das Ergebnis dann auch in seiner Helfer-App bei den hochgeladenen Ergebnissen auf.
7. Klicken Sie unten rechts auf `Eintragen`.

:::tip

**Wie funktioniert die Auswahl von Helfer, Teilnehmer und Disziplin?**

Die Auswahl von Helfer, Teilnehmer und Disziplin ist vielleicht nicht ganz selbsterklärend. Gehen Sie wie folgt vor:

1. Klicken Sie z. B. in das Teilnehmer-Feld. Dadurch öffnet sich dadrunter eine Liste. In dieser werden aber immer nur die 10 ersten Teilnehmer angezeigt.
2. Fangen Sie an, den Namen des Teilnehmers einzugeben. Nach ein paar Zeichen sollte der gewünschte Teilnehmer in der Liste auftauchen.
3. Klicken Sie auf den gewünschten Teilnehmer, um ihn auszuwählen. Alternativ können Sie auch die Pfeiltasten (Hoch und runter) benutzen, um den Teilnehmer aus der Liste zu selektieren und ihn dann mit der Entertaste auswählen.

:::

## Ergebnisse bearbeiten

1. Navigieren Sie zur `Ergebnis-Übersicht`.
2. Suchen Sie das gewünschte Ergebnis in der Liste.
3. Klicken Sie in der rechten `Aktions-Spalte` auf `Bearbeiten`. Es öffnet sich ein Dialog.
4. Nehmen Sie die gewünschten Änderungen vor.
5. Klicken Sie unten rechts auf `Ändern`.

## Ergebnisse löschen

1. Navigieren Sie zur `Ergebnis-Übersicht`.
2. Suchen Sie das gewünschte Ergebnis in der Liste.
3. Klicken Sie in der rechten `Aktions-Spalte` auf `Entfernen`. Daraufhin öffnet sich ein Dialog.
4. Bestätigen Sie mit `Entfernen`.
