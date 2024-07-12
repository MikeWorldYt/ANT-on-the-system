import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  // Toogle
  currentSection: string = ''; // default property
  showMe: boolean = true;
  visible: boolean = false;
  toggle(section: string) {
    if (this.currentSection === section) {
      this.currentSection = ''; // Si se hace clic en la misma sección, la ocultamos
    } else {
      this.currentSection = section; // Si se hace clic en una nueva sección, la mostramos
    }
  }

  // Module section control
  moduleSection: string = '';
  hovered: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        this.moduleSection = fragment;
        // this.scrollToSection(fragment);
      }
    })
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  console.log('Scrolling...');
  const sections = document.querySelectorAll('h2');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
      this.moduleSection = section.id;
    }
  }); 
}

  scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    this.moduleSection = sectionId;
  }

  moduletoggle(section: string) {
    this.moduleSection = section;
  }

  onAnchorClick(event: Event, sectionId: string) {
    event.preventDefault();
    this.scrollToSection(sectionId);
    this.router.navigate([], { fragment: sectionId });
    console.log('esta funcionando');
  }
}
