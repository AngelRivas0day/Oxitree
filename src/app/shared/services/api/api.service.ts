import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  public isLoggedIn: BehaviorSubject<any>;
  loggedIn: boolean;

  base_url = environment.api_url;

  public setHeaders(token){
    return new HttpHeaders({ // some hard coded headers but they work hella fine in here
      'Content-Type':'application/json; charset=utf-8',
      'token': token
    });
  }

  public setHeadersWithNoToken(){
    return new HttpHeaders({ // some hard coded headers but they work hella fine in here
      'Content-Type':'application/json; charset=utf-8',
    });
  }

  public setHeadersWithJustToken(token){
    return new HttpHeaders({ // some hard coded headers but they work hella fine in here
      'token': token
    });
  }


  private options = { headers: null, };

  public _auth = new BehaviorSubject<boolean>( false );

  constructor(
    private http: HttpClient,
  ) {
    this.resetHeaders();
  }

  get auth(): Observable<boolean> { return this._auth; }

  private resetHeaders() {
    this.options.headers = new HttpHeaders({ 'Content-Type': 'application/json', });
  }

  private setToken( token: string ) {
    localStorage.setItem( 'access_token', token );
    this.options.headers = new HttpHeaders({
      // 'Content-Type': 'application/json; charset=utf-8',
      'token': token,
      // 'Content-Type': 'multipart/form-data'
    });
  }

  restoreAccess() {
    const token = localStorage.getItem( 'access_token' );
    if ( token && token.length ) {
      this.setToken( token );
      this._auth.next( true );
    }
  }

  login( data: any ) {
    this.http.post(this.base_url+'/admin/login', data ).subscribe((data: any) => {
      console.log(data);
      if(data.token.length){
        this.setToken(data.token);
        localStorage.setItem('user', JSON.stringify(data));
        this._auth.next( true );
      }else{
        this._auth.next( false );
      }
      console.log(data.token);
    },(error)=>{
      console.log("no se pudo hacer login");
    });
  }

  logout() {
    localStorage.removeItem( 'access_token' );
    this.resetHeaders();
    this._auth.next( false );
  }

  public   handleError( error: HttpErrorResponse ) {
    if ( error.error instanceof ErrorEvent ) {
      // Client-side or network error
      console.error( 'An error occurred:', error.error.message );
    } else {
      console.error( `Backend returned code ${error.status}, body was: ${error.message}` );
    }
    // return throwError( error.message );
  }

  public catchRequestError() {
    return catchError(( err: HttpErrorResponse ) => {
      if ( err.status === 401 ) {
        this.logout();
      } else {
        this.handleError( err );
      }
      return of( null );
    });
  }

  getOne( endpoint: string, id: any) {
    return this.http.get(`${this.base_url}/${endpoint}/${id}`, this.options ).pipe(
      retry(2),
      this.catchRequestError()
    );
  }

  getAll( endpoint: string ) {
    return this.http.get(`${this.base_url}/${endpoint}/`, this.options ).pipe(
      retry(2),
      this.catchRequestError()
    );
  }

  post( endpoint: string, data = null , token?: any) {
    if(token){
      this.setToken(token);
    }
    return this.http.post(`${this.base_url}/${endpoint}/`, data, this.options ).pipe(
      retry(2),
      this.catchRequestError()
    );
  }

  delete( endpoint: string, id: any , token: any) {
    this.setToken(token);
    return this.http.delete(`${this.base_url}/${endpoint}/${id}`, this.options ).pipe(
      retry(2),
      this.catchRequestError()
    );
  }

  getCustomTrees(endpoint: string, params: any[]){
    let climate = params['climate'];
    let state = params['state'];
    let region = params['region'];
    let size = params['size'];
    return this.http.get(`${this.base_url}/${endpoint}/${state}/${region}/${climate}/${size}`, this.options).pipe(
      retry(2),
      this.catchRequestError()
    );
  }

}
