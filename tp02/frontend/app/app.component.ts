import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent} from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarteModule } from './carte/carte.module';
import { NgxsModule } from '@ngxs/store';
import { AddToCart } from './actions/cart.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent, CarteModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
}
