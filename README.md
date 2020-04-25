country-location-timezone
==============================
Basic library for Country list and those states with lat and long, timezones


# Install
`npm i country-location-timezone`

# Usage

## Latest Release : `v1.0.4`
  - ES6 Module usage
   
     ```js
     import csc from 'country-location-timezone'

     // Import Interfaces`
     import { ICountry, IState, IZoneOffset } from 'country-location-timezone'
     ```
  - AMD Module usage
  
    ```js
    let csc = require('country-location-timezone').default
    ```

# Docs

getCountryByCode(code)
---------------

It accepts a valid `CountryCode` eg: `'AS'` and   returns *Country Details*

type: **json | ICountry**

```js
{"id":"28","name":"Burkina Faso","sortname":"BF","phonecode":"226","lat":"13.0000","lng":"-2.0000"}
```

getCountryById(id)
---------------

It accepts a valid `CountryId` and   returns *Country Details*

type: **json | ICountry**

```js
{"id":"28","name":"Burkina Faso","sortname":"BF","phonecode":"226","lat":"13.0000","lng":"-2.0000"}
```

getStateById(id)
---------------

It accepts a valid `StateId` and   returns *State Details*

type: **json | IState**

```js
{"id":"4543","name":"Nabatieh","country_id":"99","country_code":"LB","lat":"33.366666666667","lng":"35.483333333333"}
```

getStatesOfCountry(countryId)
---------------

It accepts a valid `CountryId` and   returns *all States* as Array of JSON

type: **array of json | IState**

```js
[
  {"id":"4543","name":"Nabatieh","country_id":"99","country_code":"LB","lat":"33.366666666667","lng":"35.483333333333"}
]

```
getLocaleStatesOfCountry(lng,countryId)
---------------

It accepts a valid `CountryId`, `lng` and   returns *all States* as Array of JSON
you need to add `lng`_state.json as your locale

type: **array of json | IState**

```js
[
  {"id":"2501152","name":"قسنطينة","country_id":"3","country_code":"DZ","lat":"36.365","lng":"6.6147222222222"}
]

```

getAllCountries
---------------
It returns **all Countries**

type: **array of json | ICountry**

```js
[
  {"id":"28","name":"Burkina Faso","sortname":"BF","phonecode":"226","lat":"13.0000","lng":"-2.0000"}
]
```

getAllLocaleCountries(lng)
---------------
It accepts a valid `lng`
you need to add `lng`_country.json as your locale
It returns **all Countries**

type: **array of json | ICountry**

```js
[
  {"id":"11","name":"النمسا","sortname":"AT","phonecode":"43","lat":"47.3333","lng":"13.3333"}
]
```

getAllZonesOffset
---------------
It returns **all Zoneoffset**

type: **array of json | IZoneOffset**

```js
[
  {"text":"UTC-12:00","offset":"-12","abbr":"DST"}
]
```

getZoneByAbbr(abbr)
---------------

It accepts a valid `abbr` and   returns *all Zones* as Array of JSON

type: **array of json | IZoneOffset**

```js
[
  {"text":"UTC-12:00","offset":"-12","abbr":"DST"}
]

```
