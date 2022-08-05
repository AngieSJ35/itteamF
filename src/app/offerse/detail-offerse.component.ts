import { Component, OnInit } from '@angular/core';
import { OfferseService } from '../service/offerse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Offerse } from '../models/offerse';

@Component({
  selector: 'app-detail-offerse',
  templateUrl: './detail-offerse.component.html',
  styleUrls: ['./detail-offerse.component.css']
})

export class DetailOfferseComponent implements OnInit {

  offerse: Offerse | undefined;

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
        this.volver();
      }
      }
    );
  }

  volver(): void {
    this.router.navigate(['/']);
  }

}
