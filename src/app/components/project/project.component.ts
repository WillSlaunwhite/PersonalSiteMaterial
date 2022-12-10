import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class Project {
  name: string;
  imageUrl: string;
  description: string;

  constructor(name: string, imageUrl: string, description: string) {
    this.name = name;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  showText: boolean = false;

  constructor(private route: ActivatedRoute) { }
  projectName: string | null = null;
  images = {
    VioletMarketplace: ['https://i.imgur.com/166UgKm.jpg', 'https://i.imgur.com/hJZOapP.jpg'],
    OutTheDoor: [],
    TheBet: []
  }

  projects: Project[] = [
    new Project('VioletMarketplace', 'https://i.imgur.com/166UgKm.jpg', 'This was our group final project for Skill Distillery, a full-stack Java Bootcamp. The concept was an NFT marketplace that allows users to bid on/purchase tokens. Skill Distillery generated our team names using a My Little Pony name generator, so we rolled with the idea and made our first NFT Collection My Little Pony based. Users visiting our site have the ability to create an account, with authorization and encryption from Spring Security. Users can view their token collection and bid on/purchase tokens posted by other users. CRUD has been implemented for Users, Tokens, Bids and Transactions.'),
    new Project('MidtermProject', 'https://i.imgur.com/JpypljN.jpg', 'hello?'),
    new Project('EventTrackerProject', 'https://i.imgur.com/dYbFXm7.jpg', 'hello?'),

  ]

  ngOnInit(): void {
    this.projectName = this.route.snapshot.params['projectName'];
  }

}
