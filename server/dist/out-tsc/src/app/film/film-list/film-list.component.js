import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let FilmListComponent = class FilmListComponent {
    constructor(filmService) {
        this.filmService = filmService;
        this.films = [];
    }
    ngOnInit() {
        const filmObservable = this.filmService.getFilms();
        filmObservable.subscribe((films) => {
            this.films = films;
        }, (err) => {
        }, () => {
        });
    }
};
FilmListComponent = tslib_1.__decorate([
    Component({
        selector: 'bwm-film-list',
        templateUrl: './film-list.component.html',
        styleUrls: ['./film-list.component.scss']
    })
], FilmListComponent);
export { FilmListComponent };
//# sourceMappingURL=film-list.component.js.map