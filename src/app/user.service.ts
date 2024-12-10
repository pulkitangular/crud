import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

interface User {
  created: string;
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
}

interface UserResponse {
  data: {
    memberCount: number;
    members: { user: User }[];
  };
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; 
  constructor(private http: HttpClient) {}

  // this method for get the data from the api
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`); 
  }

  // Get user by ID
  getUserById(userId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`).pipe(
      map((data) => data.members.find((member:any) => member.user.userId === userId)?.user)
    );
  }

// update the user name from user_list
  updateUser(userId: string, userData: any): Observable<any> {
    console.log(`URL: ${this.apiUrl}/${userId}`);
    return this.http.patch<any>(`${this.apiUrl}/${userId}`, userData);
  }

}
