"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var country_json_1 = __importDefault(require("./lib/country.json"));
var state_json_1 = __importDefault(require("./lib/state.json"));
var zone_json_1 = __importDefault(require("./lib/zoneoffset.json"));
exports.default = {
    getCountryById: function (id) {
        return _findEntryById(country_json_1.default, id);
    },
    getStateById: function (id) {
        return _findEntryById(state_json_1.default, id);
    },
    getStatesOfCountry: function (countryId) {
        var states = state_json_1.default.filter(function (value, index) {
            return value.country_id === countryId;
        });
        return states.sort(compare);
    },
	getLocaleStatesOfCountry: function (lng, countryId) {
		
		var lng_state_json_1 = __importDefault(require("./lib/" + lng + "_state.json"));
		
        var states = lng_state_json_1.default.filter(function (value, index) {
            return value.country_id === countryId;
        });
        return states.sort(compare);
    },
    getAllCountries: function () {
        return country_json_1.default;
    },
	getAllLocaleCountries: function(lng)
	{
		var lng_country_json_1 = __importDefault(require("./lib/" + lng + "_country.json"));
		return lng_country_json_1.default;
	},
    getCountryByCode: function (code) {
        return _findEntryByCode(country_json_1.default, code);
    },
    getAllZonesOffset: function () {
        return zone_json_1.default;
    },
    getZoneByAbbr: function (abbr) {
        return _findEntryByAbbr(zone_json_1.default, abbr);
    }
};
var _findEntryById = function (source, id) {
    if (id && source != null) {
        var idx = source.findIndex(function (c) { return c.id === id; });
        return (idx !== -1) ? source[idx] : "";
    }
    else
        return "";
};
var _findEntryByCode = function (source, code) {
    if (code && source != null) {
        var codex = source.findIndex(function (c) { return c.sortname === code; });
        return (codex !== -1) ? source[codex] : "";
    }
    else
        return "";
};
var _findEntryByAbbr = function (source, abbr) {
    if (abbr && source != null) {
        var codex = source.findIndex(function (c) { return c.abbr === abbr; });
        return (codex !== -1) ? source[codex] : "";
    }
    else
        return "";
};
function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}
