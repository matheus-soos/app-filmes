import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MovieComponent } from './movie/movie.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { FilmesService } from '../../services/filmes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private filmesService: FilmesService
  ) {}

  movies: Array<any> = this.filmesService.movies

  ngOnInit(): void {
    //this.movies = this.filmesService.getFilmes()
  }
}
