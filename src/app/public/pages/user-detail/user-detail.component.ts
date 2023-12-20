import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserJsonPlaceHolder } from 'src/app/core/interfaces/user.interface'; 
import { Route } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user: UserJsonPlaceHolder = {
    id: 0,
    name: '',
    email: '',
    phoneNumber: 0,
    password: '',
  };
  isLoading: boolean = true;
  userId = this.auth.getUserId();
  editing: boolean = false;

  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}  

  
  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    if (this.userId) {
    this.userService.getUserDetails(this.userId)
      .then(user => {
        this.user = user;
        this.isLoading = false;
      })
      .catch(error => console.error(error));
    }
  }

  enableEditing(): void {
    this.editing = true;
  }

  onSubmit(): void {
    if (this.user && this.editing) {
      this.userService.updateUser(this.user)
        .then(updatedUser => {
          this.user = updatedUser;
          this.editing = false;
        })
        .catch(error => console.error(error));
    }
  }

  deleteAccount(): void {
    if (confirm('¿Estás seguro de que quieres eliminar tu cuenta?')) {
      if (this.userId) {
      this.userService.deleteUser(this.userId)
        .then(() => {
          // Redirigir a login
        })
        .catch(error => console.error(error));
      }
    }
  }
}
