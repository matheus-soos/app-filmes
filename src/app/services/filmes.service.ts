import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor() { }

  movies: Array<any> = [
    { id: 1, name: "Aquaman", duration: "2h50min", description: "Filme sobre um herói peixe", poster: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-aquaman-h-pop-arte-poster/poparteskins2/15938529350/edbd48f8682a72c8247e692074885c5c.jpeg"},
    { id: 2, name: "Batman", duration: "3h", description: "Filme sobre o cavaleiro das trevas", poster: "https://img.elo7.com.br/product/original/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg"},
    { id: 1, name: "Aquaman", duration: "2h50min", description: "Filme sobre um herói peixe", poster: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-aquaman-h-pop-arte-poster/poparteskins2/15938529350/edbd48f8682a72c8247e692074885c5c.jpeg"},
    { id: 2, name: "Batman", duration: "3h", description: "Filme sobre o cavaleiro das trevas", poster: "https://img.elo7.com.br/product/original/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg"},
    { id: 1, name: "Aquaman", duration: "2h50min", description: "Filme sobre um herói peixe", poster: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-aquaman-h-pop-arte-poster/poparteskins2/15938529350/edbd48f8682a72c8247e692074885c5c.jpeg"},
    { id: 2, name: "Batman", duration: "3h", description: "Filme sobre o cavaleiro das trevas", poster: "https://img.elo7.com.br/product/original/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg"},
    { id: 1, name: "Aquaman", duration: "2h50min", description: "Filme sobre um herói peixe", poster: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-aquaman-h-pop-arte-poster/poparteskins2/15938529350/edbd48f8682a72c8247e692074885c5c.jpeg"},
    { id: 2, name: "Batman", duration: "3h", description: "Filme sobre o cavaleiro das trevas", poster: "https://img.elo7.com.br/product/original/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg"},
    { id: 1, name: "Aquaman", duration: "2h50min", description: "Filme sobre um herói peixe", poster: "https://a-static.mlcdn.com.br/450x450/poster-cartaz-aquaman-h-pop-arte-poster/poparteskins2/15938529350/edbd48f8682a72c8247e692074885c5c.jpeg"},
    { id: 2, name: "Batman", duration: "3h", description: "Filme sobre o cavaleiro das trevas", poster: "https://img.elo7.com.br/product/original/2570828/big-poster-gamer-batman-arkham-knight-lo04-tam-90x60-cm.jpg"},
  ]

  getFilmes() {
    return this.movies
  }
}
