import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  postData: any;
  similarPostArray: Array<any> | undefined;

  constructor( private route: ActivatedRoute, private postService: PostsService ,@Inject(HttpClient) private http: HttpClient) { }

  ngOnInit(): void {

      this.route.params.subscribe(val => {

          this.postService.countViews(val['id']);

          this.postService.loadOnePost(val['id']).subscribe(post => {
             this.postData = post;
             this.loadSimilarPost(this.postData.category.categoryId);
          })
      })

      
  }

  loadSimilarPost(catId: any) {
    this.postService.loadSimilar(catId).subscribe(val => {
      this.similarPostArray = val;
    })
  }


  
  //   const options = {
  //     method: 'POST',
  //     url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
  //     headers: {
  //       'content-type': 'application/json',
  //       'X-RapidAPI-Key': 'cef9f6c349mshc2386a7a02cd43ap1dc8fcjsn73cdd13ce229',
  //       'X-RapidAPI-Host': 'text-analysis12.p.rapidapi.com'
  //     }      
  //   };
  // this.http.post(options, this.postData.content).subscribe(response => {
  //   console.log(response)
  // });
  // let headers = new HttpHeaders({
	// 		'key': '7267df9121f447a88141cb8a9130ec8a'
  //   	});

  //   // const httpOptions = {
  //   //   headers: new HttpHeaders({
  //   //     'Content-Type':  'application/json',
  //   //     'x-rapidapi-host': 'text-analysis12.p.rapidapi.com',
  //   //     'x-rapidapi-key': 'cef9f6c349mshc2386a7a02cd43ap1dc8fcjsn73cdd13ce229'
  //   //   })
  //   // };



  //   // let data = `{"language":"english","text":${this.postData.content}}`
  //   let data = JSON.stringify({
  //     'id' : "1",
  //     language: 'en',
  //     text: 'Falcon 9’s first stage has landed on the Of Course I Still Love You droneship – the 9th landing of this booster'
  //   })
  // apipass(){
	// 	this.http
	// 		.post<any>('https://gpt-summarization.p.rapidapi.com/summarize', 
  //     {
  //       method : "POST",
  //       headers: {
  //         'content-type': 'application/json',
  //         'X-RapidAPI-Key': 'cef9f6c349mshc2386a7a02cd43ap1dc8fcjsn73cdd13ce229',
  //         'X-RapidAPI-Host': 'gpt-summarization.p.rapidapi.com'
  //       }, 
  //       body: '{"text":"Falcon 9’s first stage has landed on the Of Course I Still Love You droneship – the 9th landing of this booster"}'
  //     })
	// 		.subscribe(data => {
	// 			console.log(data);
	// 		});
  //   }


      // apipass(){
      // const formdata = new FormData();
      // formdata.append("key", "6182d1ded62f79ec68d18b893427e4a9");
      // formdata.append("txt", 'I love this website. it is so good');
      // formdata.append("lang", "en");

      // const requestOptions = {
      //   method: 'POST',
      //   body: formdata,
      //   redirect: 'follow'
      // };
      
      // this.http.post<any>("https://api.meaningcloud.com/sentiment-2.1", requestOptions)
      // .subscribe(data => {
      //   		console.log(data);
      //   	});
        
      //   }

    
    



  // fetch('https://fakestoreapi.com/carts',{
  //           method:"POST",
  //           body:JSON.stringify(
  //               {
  //                   userId:5,
  //                   date:2020-02-03,
  //                   products:[{productId:5,quantity:1},{productId:1,quantity:5}]
  //               }
  //           )
  //       })
  //           .then(res=>res.json())
  //           .then(json=>console.log(json))



  apipasssem(){
    const API = 'http://127.0.0.1:5000/sem'
    this.http.post<any>(API, this.postData.content)
    .subscribe(data => this.postData.sem = data['result']);
  }

  apipasssum(){
    const API = 'http://127.0.0.1:5000/sum'
    this.http.post<any>(API, this.postData.content)
    .subscribe(data => this.postData.sum = data['result']);
  }
   
  apipasslang(){
    const API = 'http://127.0.0.1:5000/lang'
    this.http.post<any>(API, this.postData.content)
    .subscribe(data => this.postData.lang = data['result']);
  }


}