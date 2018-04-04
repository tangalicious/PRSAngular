import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

const baseUrl = "http://localhost:51237";

export class SystemService {


  isLogin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get getIsLogin(): Observable<boolean> {
    return this.isLogin;
  }
  setIsLogin() {
    this.isLogin.next(true);
  }
  setNotLogin() {
    this.isLogin.next(false);
  }

  loggedInUser: User = null;

  constructor(
    ) {}

  setLoggedInUser(user: User): void {
    this.loggedInUser = user;
    console.log("Logged in user set:", this.loggedInUser);
  }
  clearLoggedInUser(): void {
    this.loggedInUser = null;
    console.log("Logged in user cleared:", this.loggedInUser);
  }
  get isLoggedIn(): boolean {
    console.log("Logged in user query:", this.loggedInUser != null);
    return this.loggedInUser != null;
  }
  url(controller: string, method: string, seg1: string = null, seg2: string = null): string {
    let aUrl = baseUrl + "/" + controller + "/" + method + "/";
    aUrl += (seg1 != null) ? seg1 + "/" : "";
    aUrl += (seg2 != null) ? seg2 + "/" : "";
    return aUrl;
  }

}