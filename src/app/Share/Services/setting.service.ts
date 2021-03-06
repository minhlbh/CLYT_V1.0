import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class SettingService {

    constructor(
        private http: Http,
        @Inject(DOCUMENT) private document
    ) { }
    getFirstConfig(): Observable<any> {
        // ...using get request
        return this.http.get(`${environment.apiUrl}menu?tenmien=${document.location.hostname}`)
            // ...and calling .json() on the response to return data
            .map((res: Response) => res.json())
            // ...errors if any
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }

    setMenu(data) {
        localStorage.setItem('app_menu', JSON.stringify(data));
    }
    getMenu() {
        return JSON.parse(localStorage.getItem('app_menu'));
    }
    setConfig(data) {
        localStorage.setItem('app_config', JSON.stringify(data));
    }
    getConfig() {
        return JSON.parse(localStorage.getItem('app_config'));
    }
}
