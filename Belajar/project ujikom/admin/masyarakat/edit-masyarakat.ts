import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; 

export class PlaywrightEditMasyarakat {
  readonly page: Page;
  readonly buttonEditMasyarakat: Locator;
  readonly namaMasyarakat: Locator;
  readonly nikMasyarakat: Locator;
  readonly emailMasyarakat: Locator;
  readonly telpMasyarakat: Locator;
  readonly fotoMasyarakat: Locator;
  readonly passwordMasyarakat: Locator;
  readonly konfirmasiPasswordMasyarakat: Locator;
  readonly checkModalEdit: Locator;
  readonly simpanEdit: Locator;
  readonly back: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonEditMasyarakat = page.getByRole('row').getByRole('link').last();

    this.namaMasyarakat = page.getByRole('dialog', { name: 'Edit Profil Masyarakat' }).locator('#nama_masyarakat');
    this.nikMasyarakat = page.getByRole('dialog', { name: 'Edit Profil Masyarakat' }).locator('#nik');
    this.emailMasyarakat = page.getByRole('dialog', { name: 'Edit Profil Masyarakat' }).locator('#email');
    this.telpMasyarakat = page.getByRole('dialog', { name: 'Edit Profil Masyarakat' }).locator('#telp');
    this.fotoMasyarakat = page.getByRole('dialog', { name: 'Edit Profil Masyarakat' }).locator('#foto_profil');
    this.passwordMasyarakat = page.getByRole('textbox', { name: 'Masukkan password baru (' });
    this.konfirmasiPasswordMasyarakat = page.getByRole('textbox', { name: 'Ulangi password baru' });

    this.checkModalEdit = page.getByRole('heading', { name: 'Edit Profil Masyarakat' });
    this.simpanEdit = page.getByRole('button', { name: 'Simpan' });
    this.back = page.getByText('List Masyarakat');
  }

  async downloadImage(url: string, filePath: string) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFileSync(filePath, buffer);
  }

  async editMasyarakat(){
    const username = faker.internet.userName();
    const telp = faker.phone.number({ style: 'human' });
    const email = faker.internet.exampleEmail();
    const password = faker.internet.password();
    const nik = faker.string.numeric(12)

    const avatarUrl = faker.image.avatar();
    const filePath = path.resolve(__dirname, 'temp_avatar.jpg'); 
    await this.downloadImage(avatarUrl, filePath);
    
    await this.buttonEditMasyarakat.click();
    await expect(this.checkModalEdit).toBeVisible();
    await this.namaMasyarakat.fill(username);
    await this.nikMasyarakat.fill(nik);
    await this.fotoMasyarakat.setInputFiles(filePath);
    await this.emailMasyarakat.fill(email);
    await this.telpMasyarakat.fill(telp);
    await this.passwordMasyarakat.fill(password);
    await this.konfirmasiPasswordMasyarakat.fill(password);
    await this.simpanEdit.click();
    await expect(this.back).toBeVisible();
  }
}