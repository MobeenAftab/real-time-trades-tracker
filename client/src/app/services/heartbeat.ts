import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Heartbeat {
  private APIURL: string = environment.apiUrl;
  private http = inject(HttpClient);
  private HttpClient: HttpRequest<{}> = new HttpRequest('GET', this.APIURL);

  public getServerStatus(): void {
    let res = this.http.get(`${this.APIURL}/api/beat`).subscribe(x => {
      console.log(x.toString());
    });
    console.log(res);

  }

  //   public getStatus() {
  //   return  this.http.get(`${this.APIURL}/api/beat`)
  //     .map(() => { return '1'; })
  //     .timeout(500)
  //     .catch(() => {return '0';})
  //     .retry()
  //     .delay(1500)
  //     .repeat();
  // }
}
