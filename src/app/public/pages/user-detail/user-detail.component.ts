import { Component, OnInit } from '@angular/core';
import { UserJsonPlaceHolder } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { PopUpComponent } from '../../components/pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

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
  passwordFieldType: string = 'password';
  source: string = '../../../../assets/icons/visible.png';

  constructor(
    private userService: UserService,
    private auth: AuthService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void {
    if (this.userId) {
      this.userService
        .getUserDetails(this.userId)
        .then((user) => {
          this.user = user;
          this.isLoading = false;
        })
        .catch((error) => console.error(error));
    }
  }

  enableEditing(): void {
    this.editing = true;
  }

  async onSubmit() {
    if (this.user && this.editing) {
      const response = await this.userService.updateUser(this.user);

      if (response) {
        console.log(response);
        this.user = response;
        this.editing = false;
        this.openPopUp('Contacto editado correctamente', 'ok');
      } else {
        this.openPopUp('Error al editar contacto', '');
      }
    }
  }

  async deleteAccount() {
    if (confirm('¿Estás seguro de que quieres eliminar tu cuenta?')) {
      if (this.userId) {
        const response = await this.userService.deleteUser(this.userId);
        if (response) {
          this.openPopUp('Usuario eliminado correctamente', 'deleteUser');
        } else {
          this.openPopUp('Error al eliminar usuario', 'ok');
        }
      }
    }
  }

  openPopUp(msg: string, tp: string, route?: string) {
    const dialogRef = this.dialog.open(PopUpComponent, {
      width: '200px',
      data: {
        message: msg,
        type: tp,
        navigate: route,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (!result) {
        if (tp === 'deleteUser') {
          this.auth.resetSession();
        }
      }
    });
  }

  togglePasswordVisibility() {
    if (this.passwordFieldType === 'password') {
      this.passwordFieldType = 'text';
      this.source = '../../../../assets/icons/invisible.png';
    } else {
      this.passwordFieldType = 'password';
      this.source = '../../../../assets/icons/visible.png';
    }
  }
}
