import { Component, OnInit } from '@angular/core';
import { Offerse } from '../models/offerse';
import { OfferseService } from '../service/offerse.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-offerse',
  templateUrl: './edit-offerse.component.html',
  styleUrls: ['./edit-offerse.component.css']
})
export class EditOfferseComponent implements OnInit {

  offerse!: Offerse;

  constructor(
    private offerseService: OfferseService,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['offerse_id'];
    this.offerseService.detail(id).subscribe(
      {
      next : data => {
        this.offerse = data;
      },
      error: err => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['offerse_id'];
    this.offerseService.update(id, this.offerse).subscribe(
      {
        next : data => {
        this.toastr.success('Offerse update', 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/']);
      },
       error : err => {
        this.toastr.error(err.error.mensaje, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        this.router.navigate(['/']);
      }
    }
    );
  }

}