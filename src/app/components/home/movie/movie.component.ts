import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  @Input() name: string = ""
  @Input() duration: string = ""
  @Input() description: string = ""
  @Input() poster: string = ""
}
