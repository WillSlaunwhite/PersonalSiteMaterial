import { Component, OnInit } from '@angular/core';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  faLinkedin = faLinkedin;
  faGithub = faGithub;


  ngOnInit(): void {
  }

  openPdf(){
    window.open("assets/Resume.pdf");
  }

}
