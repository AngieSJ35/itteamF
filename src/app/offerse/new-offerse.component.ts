import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Offerse } from '../models/offerse';
import { ToastrService } from 'ngx-toastr';
import { OfferseService } from '../service/offerse.service';

@Component({
  selector: 'app-new-offerse',
  templateUrl: './new-offerse.component.html',
  styleUrls: ['./new-offerse.component.css']
})
export class NewOfferseComponent implements OnInit {
 
  name = '';
  price_value: number = 0;
  description = '';

  constructor(
    private offerseService : OfferseService,
    private toastr: ToastrService,
    private router: Router) { }


  ngOnInit(): void {
  }

  onCreate(): void {
    const offerse = new Offerse(this.price_value, this.description, this.name);
    this.offerseService.save(offerse).subscribe(
    {
      next:data => {
        this.toastr.success('Oferta creada', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
      error : err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    }
    );
  }
}
