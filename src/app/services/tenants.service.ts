import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})


export class TenantService {
  deleteTenant(id: any) {
    throw new Error('Method not implemented.');
  }

	url: string = "http://localhost:2000/api/tenant";
	headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

	constructor(private http: HttpClient) { }
    tenantModel: any;


	async getAllTenants() 
    {
		 return await this.http.get(this.url).toPromise();
	}

    
} 

