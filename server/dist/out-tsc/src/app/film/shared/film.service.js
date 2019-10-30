import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
let FilmService = class FilmService {
    constructor(http) {
        this.http = http;
    }
    getPhimById(filmId) {
        return this.http.get(environment.API_URL + '/api/v1/films/' + filmId);
    }
    getFilms() {
        return this.http.get(environment.API_URL + '/api/v1/films');
    }
};
FilmService = tslib_1.__decorate([
    Injectable()
], FilmService);
export { FilmService };
//# sourceMappingURL=film.service.js.map