import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import axios from 'axios';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';



class CatItem {
    trackName: string;
    artistName: string;
    trackViewUrl: string;
    artworkUrl30: string;
    artistId: string;
    constructor(trackName = '',
        artistName = '',
        trackViewUrl = '',
        artworkUrl30 = '',
        artistId = '') {
        this.trackName = trackName;
        this.artistName = artistName;
        this.trackViewUrl = trackViewUrl;
        this.artworkUrl30 = artworkUrl30;
        this.artistId = artistId;
    }
}
const CAT_API_URL = 'https://api.thecatapi.com/v1/breeds';
const ARTICLE_URL = 'https://api.realworld.io/api/articles?limit=20&offset=0';
@Injectable({
    providedIn: 'root'
})
export class CatService {
    
    constructor(private http: HttpClient) { }

    //returns promise
    public async getCatData(): Promise<any> {
        try {
            return await axios.get(CAT_API_URL)
        } catch (error) {
            console.error(error);
            throw Error;
        }
    }
    private formatErrors(error: any) {
        return throwError(error.error);
    }
    //returns a Observable
    public getCatDataObservable(): Observable<HttpResponse<Object>> {
        //return this.http.get<any[]>(CAT_API_URL, { observe: 'response' });
        return this.http.get(CAT_API_URL, { observe: 'response' }).pipe(catchError(this.formatErrors));
    }

    public get(): Observable<any> {
        try {
            return this.http.get(ARTICLE_URL)
                .pipe(catchError(this.formatErrors));
        }
        catch (error) {
            console.log(error);
        }

    }

}