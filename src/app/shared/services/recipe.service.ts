import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { RecipeRequest } from '../interfaces/recipe-request';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private http = inject(HttpClient);
  private webhookUrl = 'http://localhost:5678/webhook-test/ec7e4e3a-0690-443c-9347-e51b9e8c0ee2';

  generateRecipe(request: RecipeRequest) {
    return this.http.post(this.webhookUrl, request);
  }
}
