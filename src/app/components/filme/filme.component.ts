import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../../services/filmes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filme',
  standalone: true,
  imports: [],
  templateUrl: './filme.component.html',
  styleUrl: './filme.component.css'
})
export class FilmeComponent implements OnInit {
  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute
  ) {}

  movies: Array<any> = this.filmesService.movies

  movie: any

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params["id"]

      const movie = this.movies.find(movie => movie.id == id)

      this.movie = movie
    })
  }
}
