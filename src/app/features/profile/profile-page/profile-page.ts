import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  template: `
    <section dir="rtl">
      <h1>پروفایل من</h1>
      <p>اینجا اطلاعات کاربر نمایش داده می‌شود.</p>
    </section>
  `,
})
export class ProfilePage {}