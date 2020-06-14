# Kapsalon

## Welkom op mijn Kapsalon repository!

Dit is mijn eerste portfolioproject.\
\
Ik ben bezig geweest met het maken van een website voor een fictieve kapsalon. Het is een kapsalon geworden omdat ik een toepassing kon 
vinden voor onderdelen om zo verschillende dingen te kunnen laten zien. Afbeeldingen, meerdere pagina's, pop-up, formulieren. 
Maar ook het gebruik van library's, Bootstrap en toepassing van JQuery en Javascript voor styling en effectjes.  
Daarnaast heb ik rekening gehouden met de responsiveness en accessibility van de website.\
\
Er zit verder geen logica in de website. Dat wil zeggen dat er geen formulieren worden verzonden en de linkjes in de footer niet werken. Dit is puur bedoeld als demonstratie van mijn code schrijfstijl en oog voor design.

https://ilonarus.github.io/Kapsalon/


### Website
**Homepage:**\
De homepage bevat een aantal sections. 
- De header heeft een effectje. Dit gedaan met Javascript.
- Onder 'ons werk' heb ik Lightbox gebruikt voor de afbeeldingen. http://lokeshdhakar.com/projects/lightbox2/
- De knoppen op deze pagina (met uitzondering van 'Afspraak maken') zijn linkjes naar andere pagina's
- Voor de icoontjes heb ik gebruik gemaakt van Font Awesome. https://fontawesome.com/

\
**Pop-up:**\
Op meerder plekken op de website kan een pop-up geopend worden om een afspraak te maken. Hiervoor heb ik Javascript en JQuery gebruikt.
Deze pop-up bevat
- datepicker
- timepicker
- dropdown (2x)
- checkbox
- inputvelden (4x)
- verzendknop

Voor de styling van de onderdelen (timepicker, datepicker & drop-down) in de pop-up heb ik gekozen voor Material Design voor Bootstrap. 
De code hiervoor heb ik van https://gijgo.com 

\
**Over ons:**\
Deze pagina bestaat uit een drietal articles met elke een knop om een afspraak te maken. 

\
**Prijslijst:**\
Hier heb ik de prijslijsten weergegeven op flip-cards. Deze hebben een front en back, met elk een eigen inhoud.

\
**Contact:**\
Hier heb ik een simpel contactformulier gebruikt.


### Code
Elke pagina op deze website bestaat uit een header, content en footer.
Ik heb er voor gekozen om de css in twee bestanden te zetten. Een utilities.css voor de styling van algemene elementen en styles.css 
voor de overige elementen.
In de css bestanden heb ik de verschillende onderdelen gegroepeerd zodat het overzichtelijker is.
