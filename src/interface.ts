export interface ICountry {
    id: string;
    name: string;
    phonecode: string;
    sortname: string;
	lat: string;
	lng: string;
}

export interface IState {
    id: string;
    name: string;
    country_id: string;
	country_code: string;
	lat: string;
	lng: string;
}

export interface IZoneOffset {
    text: string;
    offset: string;
	abbr: string;
}