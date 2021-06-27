import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { HomeComponent } from './_components/pages/home/home.component';
import { LoginComponent } from './_components/pages/login/login.component';
import { RegisterComponent } from './_components/pages/register/register.component';
import { DecksComponent } from './_components/pages/decks/decks.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewDeckModalComponent } from './_components/pages/decks/new-deck-modal/new-deck-modal.component';
import { JwtInterceptor } from './_interceptors/jwt.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './_interceptors/loading.interceptor';
import { AddCardsComponent } from './_components/pages/add-cards/add-cards.component';
import { StudyComponent } from './_components/pages/decks/study/study.component';
import { DeckPageComponent } from './_components/pages/decks/deck-page/deck-page.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { EditCardsComponent } from './_components/pages/edit-cards/edit-cards.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FooterComponent } from './_components/footer/footer.component';
import { DeleteDeckModalComponent } from './_components/pages/decks/deck-page/delete-deck-modal/delete-deck-modal.component';
import { EditNameModalComponent } from './_components/pages/decks/deck-page/edit-name-modal/edit-name-modal.component';
import { ErrorInterceptor } from './_interceptors/error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { NotFoundComponent } from './_components/pages/not-found/not-found.component';
import { AdminComponent } from './_components/pages/admin/admin.component';
import { HasClaimDirective } from './_directives/has-claim.directive';
import { SuccessComponent } from './_components/pages/register/success/success.component';
import { ConfirmEmailComponent } from './_components/pages/register/confirm-email/confirm-email.component';
import { ForgotPasswordComponent } from './_components/pages/login/forgot-password/forgot-password.component';
import { ForgotPasswordConfirmationComponent } from './_components/pages/login/forgot-password-confirmation/forgot-password-confirmation.component';
import { ResetPasswordComponent } from './_components/pages/reset-password/reset-password.component';
import { ResetPasswordConfirmationComponent } from './_components/pages/reset-password/reset-password-confirmation/reset-password-confirmation.component';
import { AccountSettingsComponent } from './_components/pages/account-settings/account-settings.component';
import { ChangePasswordComponent } from './_components/pages/account-settings/change-password/change-password.component';
import { ChangePasswordSuccessComponent } from './_components/pages/account-settings/change-password/change-password-success/change-password-success.component';
import { ServerErrorComponent } from './_components/pages/server-error/server-error.component';
import { DeleteCardModalComponent } from './_components/pages/edit-cards/delete-card-modal/delete-card-modal.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UpdateSwModalComponent } from './_components/update-sw-modal/update-sw-modal.component';
import { DeleteDataComponent } from './_components/pages/account-settings/delete-data/delete-data.component';
import { DeleteDataSuccessComponent } from './_components/pages/account-settings/delete-data/delete-data-success/delete-data-success.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    DecksComponent,
    NewDeckModalComponent,
    AddCardsComponent,
    StudyComponent,
    DeckPageComponent,
    EditCardsComponent,
    FooterComponent,
    DeleteDeckModalComponent,
    EditNameModalComponent,
    NotFoundComponent,
    AdminComponent,
    HasClaimDirective,
    SuccessComponent,
    ConfirmEmailComponent,
    ForgotPasswordComponent,
    ForgotPasswordConfirmationComponent,
    ResetPasswordComponent,
    ResetPasswordConfirmationComponent,
    AccountSettingsComponent,
    ChangePasswordComponent,
    ChangePasswordSuccessComponent,
    ServerErrorComponent,
    DeleteCardModalComponent,
    UpdateSwModalComponent,
    DeleteDataComponent,
    DeleteDataSuccessComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgxSpinnerModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    NgxPaginationModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-left',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerImmediately',
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
