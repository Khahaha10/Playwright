import { expect, type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker/locale/id_ID';
import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch'; 

export class PlaywrightAddPengaduan {
  readonly page: Page;
  readonly judulPengaduan: Locator;
  readonly pilihFotoPengaduan: Locator;
  readonly isiPengaduan: Locator;
  readonly buttonSimpan: Locator;
  readonly dashboardHeader: Locator

  constructor(page: Page) {
    this.page = page;
    this.judulPengaduan = page.getByPlaceholder('Masukkan Judul Pengaduan');
    this.pilihFotoPengaduan = page.getByLabel('Foto', { exact: true });
    this.isiPengaduan = page.getByPlaceholder('Masukkan Isi Pengaduan');
    this.buttonSimpan = page.getByRole('button', { name: ' Submit' });
    this.dashboardHeader = page.getByRole('heading', { name: 'Pengaduan'}).locator('b');
  }

  async downloadImage(url: string, filePath: string) {
    const response = await fetch(url);
    const buffer = await response.buffer();
    fs.writeFileSync(filePath, buffer);
  }

  async addPengaduan () {
    const judul = faker.lorem.words(3);
    const isi = faker.lorem.sentences(2);

    const avatarUrl = faker.image.avatar();
    const filePath = path.resolve(__dirname, 'temp_avatar.jpg'); 
    await this.downloadImage(avatarUrl, filePath);

    await this.judulPengaduan.fill(judul);
    await this.pilihFotoPengaduan.setInputFiles(filePath);
    await this.isiPengaduan.fill(isi);
    await this.buttonSimpan.click();
    await expect(this.dashboardHeader).toBeVisible();
  }
}