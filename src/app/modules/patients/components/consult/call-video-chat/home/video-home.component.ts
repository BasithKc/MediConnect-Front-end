import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-video-home',
  templateUrl: './video-home.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule
  ]
})

export class videoHomeComponent {
  roomId!: string

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  enterRoom() {
    console.log(this.roomId);
    this.router.navigate([`/consult/video-room/`, this.roomId])
  }
}