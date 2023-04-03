import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'environments/environment';
import { GiphyBaseRequest, GiphyResponse, GiphySearchPayload } from '@shared';
import {
  GIPHY_SEARCH_ENDPOINT,
  GIPHY_TRENDING_ENDPOINT,
} from '@shared/constants';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private endpoint = environment.GIPHY_API_URL;
  private api_key = environment.GIPHY_API_KEY;

  constructor(private http: HttpClient) {}

  private getRequestParamsObject<T extends GiphyBaseRequest>(
    requestParams?: T
  ): HttpParams {
    let params: HttpParams = new HttpParams();

    params = params.append('api_key', this.api_key);

    if (requestParams) {
      const reqBodyEntries: Array<[string, any]> =
        Object.entries(requestParams);

      reqBodyEntries.forEach(([key, value]: [string, any]) => {
        if (value !== undefined) {
          params = params.append(key, value);
        }
      });
    }

    return params;
  }

  getTrending(query?: GiphyBaseRequest) {
    const url = `${this.endpoint}${GIPHY_TRENDING_ENDPOINT}`;
    return this.http.get<GiphyResponse>(url, {
      params: this.getRequestParamsObject(query),
    });
  }

  search(query?: GiphySearchPayload) {
    const url = `${this.endpoint}${GIPHY_SEARCH_ENDPOINT}`;
    return this.http.get<GiphyResponse>(url, {
      params: this.getRequestParamsObject(query),
    });
  }
}
