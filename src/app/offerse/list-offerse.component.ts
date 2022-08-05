import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Offerse } from '../models/offerse';
import { OfferseService } from '../service/offerse.service';

@Component({
  selector: 'app-list-offerse',
  templateUrl: './list-offerse.component.html',
  styleUrls: ['./list-offerse.component.css']
})
export class ListOfferseComponent implements OnInit {

  offerses: Offerse[] = [];

  constructor(
    private offerseService: OfferseService,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.loadOfferses();
  }

  loadOfferses(): void {
    this.offerseService.list().subscribe(
      {
      next : data => {
        this.offerses = data;
      },
      error: err => {
        console.log(err);
      }
    }
    )
  }

  delete(offerse_id?: number) {
    if(offerse_id != undefined){
    this.offerseService.delete(offerse_id).subscribe(
      {
      next : data => {
        this.toastr.success('Oferta eliminada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.loadOfferses();
      },
      error : err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
      }
    }
    );
  }
  }
}

