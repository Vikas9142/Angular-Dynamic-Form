import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
}) 
export class DataService {
 sharedMessage : any = new BehaviorSubject<string>('Default Message');

  constructor(private http : HttpClient) { }

  changeMessage(message) {
    this.sharedMessage.next(message);
  }

  getAPIMethod = function() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

}