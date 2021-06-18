import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSettingsComponent } from './_components/pages/account-settings/account-settings.component';
import { ChangePasswordSuccessComponent } from './_components/pages/account-settings/change-password/change-password-success/change-password-success.component';
import { ChangePasswordComponent } from './_components/pages/account-settings/change-password/change-password.component';
import { AddCardsComponent } from './_components/pages/add-cards/add-cards.component';
import { AdminComponent } from './_components/pages/admin/admin.component';
import { DeckPageComponent } from './_components/pages/decks/deck-page/deck-page.component';
import { DecksComponent } from './_components/pages/decks/decks.component';
import { StudyComponent } from './_components/pages/decks/study/study.component';
import { EditCardsComponent } from './_components/pages/edit-cards/edit-cards.component';
import { HomeComponent } from './_components/pages/home/home.component';
import { ForgotPasswordConfirmationComponent } from './_components/pages/login/forgot-password-confirmation/forgot-password-confirmation.component';
import { ForgotPasswordComponent } from './_components/pages/login/forgot-password/forgot-password.component';
import { LoginComponent } from './_components/pages/login/login.component';
import { NotFoundComponent } from './_components/pages/not-found/not-found.component';
import { ConfirmEmailComponent } from './_components/pages/register/confirm-email/confirm-email.component';
import { RegisterComponent } from './_components/pages/register/register.component';
import { SuccessComponent } from './_components/pages/register/success/success.component';
import { ResetPasswordConfirmationComponent } from './_components/pages/reset-password/reset-password-confirmation/reset-password-confirmation.component';
import { ResetPasswordComponent } from './_components/pages/reset-password/reset-password.component';
import { ServerErrorComponent } from './_components/pages/server-error/server-error.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/forgot-password', component: ForgotPasswordComponent },
  {
    path: 'login/forgot-password-confirmation',
    component: ForgotPasswordConfirmationComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'register/success/:email', component: SuccessComponent },
  { path: 'register/confirm-email', component: ConfirmEmailComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'reset-password/success',
    component: ResetPasswordConfirmationComponent,
  },
  {
    path: 'server-error/:error',
    component: ServerErrorComponent,
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'user/decks', component: DecksComponent },
      { path: 'user/decks/:id', component: DeckPageComponent },
      { path: 'user/add-cards', component: AddCardsComponent },
      { path: 'user/add-cards/:id', component: AddCardsComponent },
      { path: 'user/decks/:id/study', component: StudyComponent },
      { path: 'user/edit-cards', component: EditCardsComponent },
      { path: 'user/edit-cards/:id', component: EditCardsComponent },
      { path: 'user/account-settings', component: AccountSettingsComponent },
      {
        path: 'user/account-settings/change-password',
        component: ChangePasswordComponent,
      },
      {
        path: 'user/account-settings/change-password/success',
        component: ChangePasswordSuccessComponent,
      },
    ],
  },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: '**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
