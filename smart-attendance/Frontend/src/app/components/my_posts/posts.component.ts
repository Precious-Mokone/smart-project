import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DashService } from 'src/app/services/dashboard/dash.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  //=================================properties===================================
  posts: any
  edtStatus: any = false
  indeX: any
  edtedPost: any
  edtTitle: any
  // btnClcked="false"

  editForm: UntypedFormGroup = new UntypedFormGroup({
  title: new UntypedFormControl(),
  post: new UntypedFormControl()

  })

  //===================================methods======================================
  editPost(ind: any) {

    if (this.editForm.value.post != null && this.editForm.value.title != null) {
      const edtPost = {
        post_id: this.posts[ind].post_id,
        user_id: this.posts[ind].user_id,
        title: this.editForm.value.title,
        post: this.editForm.value.post,
        post_date: Date()
      }


      console.table(edtPost)
      this.dash.edit_post(edtPost).subscribe(() => {
        //refresh
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/post'], { relativeTo: this.route });
        //till here
      })
    } else if (this.editForm.value.post == null && this.editForm.value.title != null) {

      const edtPost = {
        post_id: this.posts[ind].post_id,
        user_id: this.posts[ind].user_id,
        title: this.editForm.value.title,
        post: this.edtedPost,
        post_date: Date()
      }


      console.table(edtPost)
      this.dash.edit_post(edtPost).subscribe(() => {
        //refresh
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/post'], { relativeTo: this.route });
        //till here
      })

    } else if (this.editForm.value.post != null && this.editForm.value.title == null) {
      const edtPost = {
        post_id: this.posts[ind].post_id,
        user_id: this.posts[ind].user_id,
        title: this.edtTitle,
        post: this.editForm.value.post,
        post_date: Date()
      }


      console.table(edtPost)
      this.dash.edit_post(edtPost).subscribe(() => {
        //refresh
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate(['/post'], { relativeTo: this.route });
        //till here
      })
    }
  }
  deletePost(ind: any) {

    console.log("selected id", ind)

    const deteteBody = {
      post_id: this.posts[ind].post_id,
      user_id: this.posts[ind].user_id
    }
    this.dash.delete_post(deteteBody).subscribe(() => {

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/post'], { relativeTo: this.route });

    })
  }
  sendIndex(ind: any) {

    this.indeX = ind
    this.edtedPost = this.posts[ind].post
    this.edtTitle = this.posts[ind].title

  }

  constructor(private dash: DashService, private path: Router, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.dash.get_post().subscribe((messages) => {
      this.posts = messages
    })

  }


}
