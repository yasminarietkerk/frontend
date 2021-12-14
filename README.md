# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Yasmina Rietkerk

#### Je startniveau:
Rode piste

#### Je focus:
Surface plane
 
</details>





## Je website

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
De website van de H&M. www.hm.com 

#### Screenshot(s) van de eerste pagina (small screen): 
Startpagina
<img src="images/IMG_1435.PNG" width="375px" alt="omschrijving van de pagina">

#### Screenshot(s) van de tweede pagina (small screen):
Punten 
<img src="images/IMG_1436.PNG" width="375px" alt="omschrijving van de pagina">
 
</details>



## Breakdownschets (week 1)
<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

<img src="images/breakdownschets.jpg" alt="breakdownschets">

### de hele pagina: 
<img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van de hele pagina">

### dynamisch deel (bijv menu): 
<img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter): 
<img src="images/dummy-plaatje.jpg" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken
Voor de eerste voortgang was ik nog niet heel ver met mijn website. Ik had het grootste gedeelte van mijn HTML en de indeling van de CSS. Dat was allemaal goed gelukt.
Ik had moeite met het selecteren van de juiste sections. Ik wilde 1 image selecteren, maar dat lukte niet.


### Agenda voor meeting
samen met je groepje opstellen

| Yasmina        | Cheun                        |  
| ---            | ---                          |
| Hoe selecteer  | Navigatie probleem oplossen. | 
| ik de juiste   | dit als er tijd is           | 
| img?           | ...                          |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- met section:nth-of-type(1) img selecteer je de image uit de eerste section.
- Met transform: skew(-10deg) maak je een element schuin (mijn mooie vrachtwagentje).
- Met ::after zorg je dat een element ergens na komt en met ::before zorg je dat een element ergens
  voor komt. Hiervoor moet je altijd content gebruiken.

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken
Ik heb een font gekozen (Avenir) en ik heb mijn nav gemaakt. Dit ging best goed. Ik heb hierbij hulp gehad van een klasgenoot, de code van de humpty opdracht gebruikt en dingen gezocht op internet en de nav werkt nu.
Het enige probleem is, als je de nav sluit dan zie je alle elementen verschuiven. Dit hoort niet. 


### Agenda voor meeting
samen met je groepje opstellen

| Yasmina                                                                           | Cheun              | Selina         | 
| ---                                                                               | ---                | ---            | 
| Tekst onder de afbeelding krijgen.                                                |                    |                |
| H&M logo blijft in de nav zitten  |                    |                |
| Elementen uit de nav schuiven op.                                            | ...                | ...            |

### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Tekst onder de afbeelding met: display: flex; flex-direction: column-reverse;
- Met display: block; verschuiven de elementen uit de nav niet meer.
- Geen standaard margin meegeven, maar op individuele elementen.

</details>





## Toegankelijkheidstest (week 4)

(moet ik nog doen)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Titel eerste bevinding
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel tweede bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel volgende bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)


#### Titel nog een bevinding. 
Hier korte omschrijving (met indien nodig een afbeelding)

Hier een omschrijving van hoe het opgelost kan worden (met indien nodig een afbeelding)

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
hier dit ging goed & dit was lastig (neem ook screenshots op van delen van je website en code)


### Agenda voor meeting
samen met je groepje opstellen

| Yasmina      | student 2          | student 3    | student 4        |
| ---            | ---                | ---          | ---              |
| De nav werkt niet goed. Als hij opent kun je blijven scrollen en dat hoort niet  | en dit             | en ik dit    | en dan ik dat    |
| Ik heb 5 afbeeldingen op mijn tweede pagina, er moeten er 2 naast elkaar en nu staan ze alle 5 naast elkaar.| dit als er tijd is | nog een punt | dit wil ik zeker |
| ...            | ...                | ...          | ...              |


### Verslag van meeting
hier na afloop snel de uitkomsten van de meeting vastleggen

- Ik was niet bij de meeting, omdat mijn opa en oma 50 jaar getrouwd waren, maar het probleem met de foto's is opgelost door een div te gebruiken.

</details>





## Eindgesprek (week 5)

<details open>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
wat goed ging was het namaken van de website. Ik had verwacht dat ik dit lastiger zou vinden, maar het ging beter dan verwacht. Wat ik lastig vind is een goede navigatie maken. Ik heb nu dat de rest van de pagina zichtbaar blijft als je nav opent en dat is niet de bedoeling. Verder had ik ook tijd te kort, want ik wilde eigenlijk meer animatie toepassen en veel meer werken met JS, maar dat is niet gelukt.

### Screenshot(s)
<img src="images/helepagina1.png" alt="screenshot van de eerste pagina">
<img src="images/helepagina2.png" alt="screenshot van de tweede pagina">
hier screenshot(s) van je eindresultaat

</details>





## Bronnenlijst

<details>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. https://css-tricks.com/snippets/css/a-guide-to-flexbox/
2. https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count?retiredLocale=nl
3. https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX()

</details>