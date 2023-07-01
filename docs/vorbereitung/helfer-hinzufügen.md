---
sidebar_position: 2
---

import ReactPlayer from "react-player";

# Helfer hinzufügen

<div className="video__wrapper">
  <ReactPlayer
    className="video__player"
    controls
    height="100%"
    config={{
      file: {
        attributes: {
          poster:
            "https://storage.googleapis.com/files.bujus.de/school-app-tutorials/school-app-helfer-hinzufu%CC%88gen-tutorial-thumbnail.jpg",
        },
      },
    }}
    url="https://storage.googleapis.com/files.bujus.de/school-app-tutorials/school-app-helfer-hinzufu%CC%88gen-tutorial.mp4"
    width="100%"
  />
</div>

## Einleitung

Nachdem Sie eine Veranstaltung erstellt haben, können Sie nun die Helfer hinzufügen. Diese können Sie einzeln hinzufügen oder auch importieren.

Jeder Helfer hat einen eigenen Benutzernamen und ein eigenes Passwort für die Helfer-App.

## Helfer hinzufügen

1. Öffnen Sie die `Helfer-Übersicht`.
2. Klicken Sie oben rechts auf `Hinzufügen`. Es öffnet sich ein Dialog.
3. Geben Sie den `Namen` des Helfers an.
4. Wenn Sie möchten, können Sie selbst noch einen `Benutzernamen` und/oder ein `Passwort` eingeben. Ansonsten werden diese automatisch generiert.
5. Klicken Sie unten rechts auf `Hinzufügen`.

## Helfer bearbeiten

1. Gehen Sie zur `Helfer-Übersicht`.
2. Suchen Sie den gewünschten Helfer in der Liste.
3. Klicken Sie in der rechten `Aktions-Spalte` auf `Bearbeiten`. Dadurch öffnet sich ein Dialog.
4. Nehmen Sie die gewünschten Änderungen vor.
5. Klicken Sie auf unten rechts auf `Ändern`.

## Helfer entfernen

1. Öffnen Sie die `Helfer-Übersicht`.
2. Suchen Sie den gewünschten Helfer in der Liste.
3. Klicken Sie in der rechten `Aktions-Spalte` auf `Entfernen`. Daraufhin öffnet sich ein Dialog.
4. Bestätigen Sie mit `Entfernen`.

## Helfer importieren

Das Importieren von Helfern ist sehr ähnlich zum [Importieren von Teilnehmern](./teilnehmer-importieren.md).

## Helfer Aktiv vs. Inaktiv

Helfer können grundsätzlich aktiv oder inaktiv sein.

Unabhängig davon, können sich Helfer immer in der Helfer-App einloggen und Ergebnisse lokal eintragen. Inaktive Helfer können dann aber keine Ergebnisse hochladen und auch keine hochgeladene Ergebnisse ansehen, bearbeiten oder entfernen.

Damit die Helfer nicht an den Ergebnissen rumpfuschen können, aktivieren Sie sie am besten nur während der Durchführung der Veranstaltung. Wie Sie sie aktivieren bzw. deaktivieren, lernen Sie im Schritte [Helfer einweisen](../durchf%C3%BChrung/helfer-einweisen.md).
