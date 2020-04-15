import { Component, OnInit } from '@angular/core';
import { VermasService } from '../../services/vermas.service'

import { ActivatedRoute, Router } from '@angular/router'
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-vermas',
  templateUrl: './vermas.component.html',
  styleUrls: ['./vermas.component.css']
})
export class VermasComponent implements OnInit {

  producto: any = []

  constructor(private vermasService: VermasService, private activateRoute: ActivatedRoute, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(this.loginService.getToken() == null){
      this.router.navigate(['/login']);
    }
    const params = this.activateRoute.snapshot.params;
    console.log(params.id);
    if(params.id){
      this.vermasService.getProducto(params.id).subscribe(
        res => {
          this.producto = res;
        }, //console.log(res),
        err => console.error(err)
      );
    }
  }

}
