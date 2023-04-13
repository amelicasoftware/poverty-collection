import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Numeraries } from '../../constants/numerary';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // palabra: string;
  numArticulos: string = Numeraries.numArticles;
  numRevistas: string = Numeraries.numJournals;
  numPaises: string = Numeraries.numCountries;
  selection: number;
  section: string;
  lang: string = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private translationService: TranslationService,
  ) {
    const section = 'section';
    this.route.params.subscribe((params) => {
      this.section = params[section];
    });
   }

  ngOnInit(): void {
    if (this.section === 'network'){
      this.toNetwork();
    }

    this.lang = localStorage.getItem('language');

    this.translationService.lang.subscribe( lang => this.lang=lang);
  }

  searchText(word: string){
    console.log(word);
    this.router.navigate(['/busqueda-general', word]);
  }

  rightScroll() {
    // console.log('me muevo a la derecha');
    const posicion = $('#contenedor-fichas').scrollLeft();
    $('#contenedor-fichas').scrollLeft(posicion + 500);
  }

  leftScroll() {
    // console.log('me muevo a la izquierda');
    const posicion = $('#contenedor-fichas').scrollLeft();
    $('#contenedor-fichas').scrollLeft(posicion - 500);
  }

  toCould() {
    document.getElementById('could').scrollIntoView({ behavior: 'smooth' });
    // this.selection = 2;
  }
  toSearcher() {
    document.getElementById('searcher').scrollIntoView({ behavior: 'smooth' });
    // this.selection = 1;
  }
  toNetwork() {
    document.getElementById('network').scrollIntoView({ behavior: 'smooth' });
    // this.selection = 3;
  }
  toMap() {
    document.getElementById('map').scrollIntoView({ behavior: 'smooth' });
    // this.selection = 4;
  }
  toSparql() {
    document.getElementById('sparql').scrollIntoView({ behavior: 'smooth' });
    // this.selection = 5;
  }
  toAbout(){
    this.router.navigate(['/acerca-de']);
  }
  toRecent(){
    document.getElementById('last-numbers').scrollIntoView({ behavior: 'smooth' });
  }
  toScrollTop(){
    const element = document.getElementsByClassName('header');
    element[0].scrollIntoView({ behavior: 'smooth'});
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    if ($(window).scrollTop() + 80 >= $('#menu-section').offset().top) {
      if ($('#menu-section').offset().top < 400) {
        $('#menu-section').css('position', 'inherit');
        $('.navigation').css('position', 'inherit');
      } else {
        $('#menu-section').css('position', 'fixed');
        $('#menu-section').css('top', '80px');
        $('#menu-section').css('width', '100%');
        $('#menu-section').css('z-index', 2);
        $('.navigation').css('z-index', 2);
        $('.navigation').css('position', 'fixed');
        $('.navigation').css('width', '100%');
        $('.navigation').css('justify-content', 'center');
        $('.navigation').css('background-color', '#37464e');
      }
    }

    if ($(window).scrollTop() > 0 && $(window).scrollTop() < 500) {
      this.selection = 1;
    }
    if ($(window).scrollTop() > 500 && $(window).scrollTop() < 1200) {
      this.selection = 2;
    }
    if ($(window).scrollTop() > 1201 && $(window).scrollTop() < 2300) {
      this.selection = 3;
    }
    if ($(window).scrollTop() > 2301 && $(window).scrollTop() < 3300) {
      this.selection = 4;
    }
    if ($(window).scrollTop() > 3201 && $(window).scrollTop() < 3600) {
      this.selection = 6;
    }
    if ($(window).scrollTop() > 3601 && $(window).scrollTop() < 4000) {
      this.selection = 5;
    }
  }
}
