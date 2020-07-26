import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.css']
})
export class TambahDataComponent implements OnInit {

  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<TambahDataComponent>
  ) { }

  data: any = {}

  ngOnInit(): void {
  }

  insert(data: any) {
    this.api.simpan(data).subscribe(res => {
      this.dialogRef.close(true)
    })
  }

}
