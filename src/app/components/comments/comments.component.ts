import { ToastrService } from 'ngx-toastr';
import { UserService } from './../../services/user-service.service';
import { Parking } from './../parkings/Parking.class';
import { Comment } from './Comment.class';
import { RestApiService } from './../../services/rest-api.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  @Input() parkingId: Parking;

  comments: Comment[] = [];
  newComment: Comment = new Comment();

  constructor(
    private restApi: RestApiService,
    public userService: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments(){
    this.restApi
      .getComments(this.parkingId.id)
      .subscribe((response: Comment[]) => {
        this.comments = response;
      });
  }

  addComment() {
    this.restApi.addComment({
      parkingId: this.parkingId.id,
      userId: this.userService.loggedUser.id,
      message: this.newComment.message
    }).subscribe((response: Comment) => {
      this.newComment = response;
      this.toastr.success('Success!');
      this.getComments();
    });
  }
}
