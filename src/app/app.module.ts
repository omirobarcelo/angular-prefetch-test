import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrefetchDirective } from './directives/prefetch.directive';
import { ProgressbarComponent } from './progressbar/progressbar.component';

@NgModule({
  declarations: [AppComponent, ProgressbarComponent, PrefetchDirective],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
