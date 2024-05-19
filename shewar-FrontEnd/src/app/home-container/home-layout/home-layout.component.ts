import { Component } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
  showFirstImage!:boolean;
  showSecondImage!:boolean;
  
  ngOnInit(): void {
    this.showFirstImage = true;
    this.showSecondImage = false;
    setInterval(() => {
      // Your code to execute repeatedly with a delay
      this.showFirstImage = !this.showFirstImage;
      this.showSecondImage = !this.showSecondImage
    }, 5000);
  }
}
