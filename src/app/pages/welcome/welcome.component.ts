import { Component, OnInit } from '@angular/core';
import { TenantService } from 'src/app/services/tenants.service';




@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  tenantModel: any;

  constructor(public __tenentService:  TenantService) { }
  tenants: any = {};

  async ngOnInit()  
  {
    
    this.tenants = await this.__tenentService.getAllTenants();
    console.log(await this.__tenentService.getAllTenants());
    
  }


  
}
