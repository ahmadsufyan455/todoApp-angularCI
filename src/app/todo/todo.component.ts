import { Component, OnInit } from '@angular/core';
//import modul dialog
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import halaman dialog yang sudah dibuat pada tahap sebelumnya
import { TambahDataComponent } from '../tambah-data/tambah-data.component';

// api service
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(
    public dialog: MatDialog, //menambahkan variabel dialog
    public api: ApiService
  ) {
    this.getData()
  }

  todo: any = []
  getData() {
    this.api.baca().subscribe(res => {
      this.todo = res
    })
  }

  ngOnInit(): void {
  }

  //fungsi untuk menampilkan dialog penambahan alamat baru
  buatKegiatan() {
    const dialogRef = this.dialog.open(TambahDataComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(res => {
      console.log('Dialog ditutup')
    });
  }
}
