import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.css']
})
export class RandomUserComponent implements OnInit {
  people!: Array<any>
  userName!: string;
  userImage!: string; 
  constructor() { }

  ngOnInit(): void {
    this.fetchData();
  }

  async fetchData() {
    const url = 'https://randomuser.me/api/';
    const response = await fetch(url);
    const { results } = await response.json();
    console.log(results);
    this.people = results;
    console.log(this.people[0].name.first);
    this.userName = this.people[0].name.first;
    this.userImage = this.people[0].picture.thumbnail;      
  }


}
