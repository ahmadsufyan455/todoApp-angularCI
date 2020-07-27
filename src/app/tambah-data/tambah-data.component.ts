import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tambah-data',
  templateUrl: './tambah-data.component.html',
  styleUrls: ['./tambah-data.component.css']
})
export class TambahDataComponent implements OnInit {

  data: any = {}
  constructor(
    public api: ApiService,
    public dialogRef: MatDialogRef<TambahDataComponent>,
    @Inject(MAT_DIALOG_DATA) public itemData: any
  ) {
    if (itemData != null) {
      this.data = itemData;
    }
  }

  ngOnInit(): void {
  }

  insert(data) {
    if (data.id == undefined) {
      this.api.simpan(data).subscribe(res => {
        this.dialogRef.close(true)
      })
    } else {
      this.api.ubah(data).subscribe(res => {
        this.dialogRef.close(true)
      })
    }
  }
}
