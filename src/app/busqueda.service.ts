import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';


declare var escape: any; //Transformar los espacios en url

@Injectable()
export class BusquedaService {


  constructor(private http: Http) {   

  }

  searchFor(name,type){
  	var url = "https://api.spotify.com/v1/search?q=" + type + ":" + escape(name) + "&type="+ type +"&limit=20";
  	return this.http.get(url);

  }


  next_page(name,type,page){
    var url = "https://api.spotify.com/v1/search?q=" + type + ":" + escape(name) + "&type="+ type +"&limit=20&offset=" + page;
    return this.http.get(url);


  }

  previous_page(name,type,page){
    var url = "https://api.spotify.com/v1/search?q=" + type + ":" + escape(name) + "&type="+ type +"&limit=20&offset=" + page;
    return this.http.get(url);

  }


}
