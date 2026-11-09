Sarjahaku on kurssin projektityötä varten tehty ja suunniteltu sovellus, millä käyttäjä pystyy etsimään sarjoja ja lisäämään niitä katselulistaan.

Näkymät:

Hakunäkymä jossa kirjoitetaan sarjan nimi hakukenttään. Nimen kirjoittamisen jälkeen painetaan hakupainiketta ja sivu näyttää haun tulokset. Sivu näyttää sarjasta kuvan jos semmoinen on saatavilla, sekä nimen, mikä on myös linkki, millä pääsee sarjan tietoihin.

Tietonäkymä, joka esittää lyhyesti sarjan tiedot, sekä napin, millä sarjan voi lisätä katselulistaan.

Katselulista näkymä, joka esittää käyttäjälle tämän katselulistan, katselulistastasta löytyy lisättyjen sarjojen kohdalta napit, millä sarjan voi poistaa listalta.

Sovelluksen teko:

Sovellus on tehty käyttäen Reactia. Näkymien välillä liikutaan React routerilla ja hakutulosten kortit käyttävät Bootsrappia. Muuten sivun css on tehty ja suunniteltu itse. Sivu käyttää API:a nimeltä TVmaze, joka on nettisivu, mikä sisältää suuren määrän sarjoja ja niiden tietoja. Sovellus käyttää fetch funktiota tietojen hakemiseen ja await/async tietojen odottamiseen.

Sovelluksen käynnistys:

Sovelluksen käynnistämiseen tarvitset Node.js sovelluksen ja npm:n. Käynnistääkseesi sovelluksen avaa terminaali projektin pääkansiossa, sekä kirjoita sinne komennot npm install, npm run dev. Avaa sivu kopioimalla tereminaalin näyttämä osoite selaimeen.
