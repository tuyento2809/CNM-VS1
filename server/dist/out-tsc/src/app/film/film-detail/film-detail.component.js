import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FilmDetailComponent = class FilmDetailComponent {
    constructor(route, filmService) {
        this.route = route;
        this.filmService = filmService;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.getFilm(params['id']);
        });
    }
    getFilm(filmId) {
        this.filmService.getPhimById(filmId).subscribe((film) => {
            this.film = film;
        });
    }
};
FilmDetailComponent = tslib_1.__decorate([
    Component({
        selector: 'bwm-film-detail',
        templateUrl: './film-detail.component.html',
        styleUrls: ['./film-detail.component.css']
    })
], FilmDetailComponent);
export { FilmDetailComponent };
//# sourceMappingURL=film-detail.component.js.map