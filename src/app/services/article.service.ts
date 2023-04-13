import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ArticleResult } from '../models/ArticleResult.model';
import { environment } from '../../environments/environment';
import { FilterChain } from '../models/FilterChain.model';
import { Country } from '../models/Country.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private _search$: Subject<string> = new Subject<string>();

  public url: string = environment.baseUrl;
  private urlProject: string = environment.urlProject;

  constructor( private http: HttpClient ) { }

  normalize = ( () => {
    const from = 'ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç';
    const to   = 'AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuunncc';
    const mapping = {};

    for (let i = 0, j = from.length; i < j; i++ ) {
          mapping[ from.charAt( i ) ] = to.charAt( i );
    }

    return (str: string) => {
      str ? str = str.replace(/ñ/gi, 'n-n') : str = '\'\'';
      const ret = [];
      for ( let i = 0, j = str.length; i < j; i++ ) {
        const c = str.charAt( i );
        if ( mapping.hasOwnProperty( str.charAt( i ) ) ) {
          ret.push( mapping[ c ] );
        } else {
          ret.push( c );
        }
      }

      return ret.join( '' );
    };
  })();

  get search$(): Observable<string> {
    return this._search$;
  }

  changeSearch(search: string): void {
    this._search$.next(search);
  }

  addQuotes(word: string): string {
    const firstLetter = word.charAt(0);
    const lastLetter = word.charAt(word.length - 1);
    let wordWithQuote = '';
    !(firstLetter === '\"')
    ? !(lastLetter === '\"')
      ? wordWithQuote = '\"' + word + '\"'
      :  wordWithQuote = '\"' + word
    : !(lastLetter === '\"')
      ? wordWithQuote = word + '\"'
      : wordWithQuote = word;
    console.log(wordWithQuote);
    return wordWithQuote;
  }

  getArticles(
    search: string,
    page: number,
    filters: FilterChain
  ): Observable<ArticleResult> {
    search = this.normalize(search);
    search = this.addQuotes(search);
    console.log('Servicio Articulos:', `${this.url}articulos/climatico2/${search}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
    return this.http.get<ArticleResult>(`${this.url}articulos/climatico2/${search}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
  }

  getArticlesByCountry(
    countryId: string,
    page: number,
    filters: FilterChain
  ): Observable<ArticleResult> {
    console.log('Servicio Articulos por Palabra Clave:', `${this.url}articulos/climatico2/pais/${countryId}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
    return this.http.get<ArticleResult>(`${this.url}articulos/climatico2/pais/${countryId}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
  }

  getArticlesByKey(
    key: string,
    page: number,
    filters: FilterChain
  ): Observable<ArticleResult> {
    key = this.normalize(key);
    key = this.addQuotes(key);
    console.log('Servicio Articulos por Palabra Clave:', `${this.url}articulos/climatico2/palabras/${key}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
    return this.http.get<ArticleResult>(`${this.url}articulos/climatico2/palabras/${key}/${page}/10/relevancia/0/{"anios":"${filters.yearChain}","idiomas":"${filters.languageChain}", "paises":"${filters.countryChain}","areas":"","disciplinas":"${filters.disciplineChain}","autores":"","instituciones":"","origen":"","funete":"","fb":1}'`);
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.urlProject}assets/json/paises.json`);
  }

  articlesExists(articlesLength: number): boolean {
    let articlesExists: boolean;
    articlesLength ? articlesExists = true : articlesExists = false;
    return articlesExists;
  }
  getLastArticles(): any {
    return this.http.get(`${this.url}articulos/climatico2/recientes/20/fechaAltaArticuloM/1`);
  }
}
