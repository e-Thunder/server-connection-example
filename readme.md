[![Build Status](https://travis-ci.org/e-Thunder/server-connection-example.svg?branch=master)](https://travis-ci.org/e-Thunder/server-connection-example)
# Server connection example

### Strona do wyswietlania i usuwania danych:

> http://lukboz.cba.pl/esp/data/index.html

### Adres requestu dodajacego dane:
> http://lukboz.cba.pl/esp/api/insert/

### Format danych

     content={<atrybut1>:<wartosc1>,<atrybut2>:<wartosc2>}{...} itp.

### Adres requestu zwracającego dane:
http://lukboz.cba.pl/esp/api/get/

***

### Jak wgrać program na ESP ?

    pio run -e esp32doit-devkit-v1 -t upload

### Testy _native_

Zalogować się do PlatformIO

    pio account login

Uruchomić testy dla _native_

    pio test -e native
