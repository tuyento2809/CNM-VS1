import { Component } from '@angular/core';
import { TheLoai } from "../../theloai/shared/theloai.model";

export class Film {
    _id: string;
    tenPhim: string;
    mota: string;
    gia: number;
    hinh: string;

    xuatchieus: Date[];
    theloai: TheLoai;

}
