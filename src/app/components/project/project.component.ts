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

  constructor(private route: ActivatedRoute) { }
  projectName: string | null = null;
  images = {
    VioletMarketplace: ['https://i.imgur.com/166UgKm.jpg', 'https://i.imgur.com/hJZOapP.jpg'],
    OutTheDoor: [],
    TheBet: []
  }

  projects: Project[] = [
    new Project('VioletMarketplace', 'https://i.imgur.com/166UgKm.jpg', 'hello?'),
    new Project('Out The Door', 'https://i.imgur.com/JpypljN.jpg', 'hello?'),
    new Project('TheBet', 'https://i.imgur.com/dYbFXm7.jpg', 'hello?'),

  ]

  ngOnInit(): void {
    this.projectName = this.route.snapshot.params['projectName'];
  }

}
