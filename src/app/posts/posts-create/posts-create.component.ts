import { Component } from "@angular/core";

@Component({
  selector:'app-post-create',
  templateUrl:'./posts-create.component.html',
})
export class PostCreateComponent {
  // Property
  enteredValue='';
  newPost='No Content';
  newPostTwoWay='No Content from Two Way';

  onAddPost(postInput:HTMLTextAreaElement) {
    this.newPost=postInput.value;
    console.dir(postInput);
  }
  onAddPostTwoWayBinding() {
    this.newPostTwoWay=this.enteredValue;
  }
}

