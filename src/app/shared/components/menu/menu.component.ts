import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    // this.menuItems = [
    //   { label: 'New', icon: 'pi pi-plus' },
    //   { label: 'Search', icon: 'pi pi-search' },
    //   {
    //     label: 'Documents',
    //     items: [
    //       {
    //         label: 'New',
    //         icon: 'pi pi-plus'
    //       },
    //       {
    //         label: 'Search',
    //         icon: 'pi pi-search'
    //       }
    //     ]
    //   },
    //   {
    //     label: 'Profile',
    //     items: [
    //       {
    //         label: 'Settings',
    //         icon: 'pi pi-cog'
    //       },
    //       {
    //         label: 'Salir',
    //         icon: 'pi pi-sign-out'
    //       }
    //     ]
    //   }
    // ];
    this.menuItems = [
      {
        label: 'Pipes en Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: '/numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: '/uncommon'
          }

        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: '/custom'
          }

        ]
      }
    ];
  }
}
