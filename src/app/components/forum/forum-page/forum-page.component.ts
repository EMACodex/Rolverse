import { Component } from '@angular/core';
import { tokenData } from '../../../interfaces/auth.interface';
import { AuthService } from '../../../services/auth.service';
import { MaterialModule } from '../../../material/material.module';
import { MatDialog } from '@angular/material/dialog';
import { CreateForumComponent } from '../create-forum/create-forum.component';
import { ForumInterface, getForumResponse } from '../../../interfaces/forum.interface';
import { ForumService } from '../../../services/forum.service';

@Component({
  selector: 'app-forum-page',
  imports: [MaterialModule],
  templateUrl: './forum-page.component.html',
  styleUrl: './forum-page.component.css'
})
export class ForumPageComponent {

  userInfo!: tokenData;
  allForums: ForumInterface[] = [];

  constructor(
    private authService: AuthService,
    private forumService: ForumService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.authService.getTokenData().subscribe({
      next: (data: tokenData) => {
        this.userInfo = data;
      },
      error: (error) => {
        console.error('Error fetching user info:', error.message);
      }
    });

    this.forumService.getAllForums().subscribe({
      next: (forums: getForumResponse) => {
        console.log('Fetched forums:', forums.data);
        this.allForums = forums.data || [];
      },
      error: (error) => {
        console.error('Error fetching forums:', error.message);
      }
    });
  }

  openCreateForumDialog() {
    const dialogRef = this.dialog.open(CreateForumComponent, {
      width: '500px',
      backdropClass: 'transparent-backdrop'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.forumService.getAllForums().subscribe({
          next: (forums: getForumResponse) => {
            console.log('Updated forums:', forums.data);
            this.allForums = forums.data || [];
          },
          error: (error) => {
            console.error('Error fetching updated forums:', error.message);
          }
        });
      }
    });
  }
}
