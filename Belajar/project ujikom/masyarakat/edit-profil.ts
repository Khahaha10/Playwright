import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; 

export class PlaywrightEditProfilMs {
  readonly page: Page;
  readonly buttonEditProfil: Locator;
  readonly checkModal: Locator;
  readonly buttonSimpan: Locator;
  readonly nikMasyarakat: Locator;
  readonly namaMasyarakat: Locator;
  readonly telpMasyarakat: Locator;
  readonly fotoMasyarakat: Locator;
  readonly dashboardHeader: Locator;


  constructor(page: Page) {
    this.buttonEditProfil = page.getByRole('link', { name: 'Foto Profil' });
    this.checkModal = page.getByRole('heading', { name: 'Edit Profil Masyarakat' });
    this.nikMasyarakat = page.getByLabel('NIK');
    this.namaMasyarakat = page.getByLabel('Nama');
    this.telpMasyarakat = page.getByLabel('No. Telepon');
    this.fotoMasyarakat = page.getByLabel('Foto Profil');
    this.buttonSimpan = page.getByRole('button', { name: 'Simpan' });
    this.dashboardHeader = page.locator('h4', {hasText: 'Home'});
  }

  async downloadImage(url: string, filePath: string) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFileSync(filePath, buffer);
  }

  async editProfilMs() {
    const nik = faker.string.numeric(16)
    const username = faker.internet.userName();
    const telp = faker.phone.number({ style: 'human' });

    const avatarUrl = faker.image.avatar();
    const filePath = path.resolve(__dirname, 'temp_avatar.jpg'); 
    await this.downloadImage(avatarUrl, filePath);

    await this.buttonEditProfil.click();
    await expect(this.checkModal).toBeVisible();
    await this.nikMasyarakat.fill(nik);
    await this.namaMasyarakat.fill(username);
    await this.telpMasyarakat.fill(telp);
    await this.fotoMasyarakat.setInputFiles(filePath);
    await this.buttonSimpan.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}

