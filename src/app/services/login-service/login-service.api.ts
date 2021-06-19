import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {LoginSignup} from "./login-service-response.model";

@Injectable({
  providedIn: "root",
})
export class LoginSignupServiceApi {
  constructor(private http: HttpClient) {}

  public doSignup(loginInformation: LoginSignup): Observable<LoginSignup> {
    return this.http.post<LoginSignup>(
      "/forum/v1/user/login",
      loginInformation
    );
  }
}
