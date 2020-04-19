import { ICountry, IState, IZoneOffset } from './src/interface';
export { ICountry, IState, IZoneOffset } from './src/interface';
declare const _default: {
    getCountryById: (id: string) => ICountry;
    getStateById: (id: string) => IState;
    getStatesOfCountry: (countryId: string) => IState[];
	getLocaleStatesOfCountry: (lng: string, countryId: string) => IState[];
    getAllCountries: () => ICountry[];
	getAllLocaleCountries: (lng: string) => ICountry[];
    getCountryByCode: (code: string) => ICountry;
	getAllZonesOffset: () => IZoneOffset[];
	getZoneByAbbr: (abbr: string) => IZoneOffset;
};
export default _default;
