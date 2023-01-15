/**
 * Default imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Material design modules
 */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSelectModule } from '@angular/material/select';

/**
 * Bootstrap and Reactive Form Modules
 */
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * Custom Components
 */
import { StarComponent } from './star/star.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedRoutingModule } from './shared.routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    NavBarComponent,
    ContactUsComponent,
    AboutUsComponent,
    PageNotFoundComponent,
    StarComponent,
  ],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatGridListModule,
    MatPaginatorModule,
    MatCardModule,
    MatDialogModule,
    NgbCarouselModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonModule,
    NgbCarouselModule,
    MatCardModule,
    MatBadgeModule,
    MatDialogModule,
    MatDividerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StarComponent,
    NavBarComponent,
    MatPaginatorModule,
  ],
})
export class SharedModule {}
