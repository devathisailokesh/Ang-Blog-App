import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsServiceService {

  constructor(private http:HttpClient) { }
  
}



// POST {Endpoint}/language/:analyze-text?api-version=2022-05-01


// {
//   "kind": "SentimentAnalysis",
//   "parameters": {
//     "modelVersion": "latest"
//   },
//   "analysisInput": {
//     "documents": [
//       {
//         "id": "1",
//         "language": "en",
//         "text": "Great atmosphere. Close to plenty of restaurants, hotels, and transit! Staff are friendly and helpful."
//       }
//     ]
//   }
// }

