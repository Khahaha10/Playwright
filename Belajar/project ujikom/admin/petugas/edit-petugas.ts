import { expect, type Locator, type Page } from '@playwright/test';

export class PlaywrightEditPetugas {
  readonly page: Page;
  readonly buttonEditPetugas: Locator;
  readonly namaPetugas: Locator;
  readonly emailPetugas: Locator;
  readonly telpPetugas: Locator;
  readonly fotoPetugas: Locator;
  readonly passwordPetugas: Locator;
  readonly konfirmasiPasswordPetugas: Locator;
  readonly checkModalEdit: Locator;
  readonly simpanEdit: Locator;
  readonly back: Locator;

  constructor(page: Page) {
    this.page = page;
    this.buttonEditPetugas = page.getByRole('row', { name: '4 Foto Budi petugas' }).getByRole('link');

    this.namaPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#nama_petugas');
    this.emailPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#email');
    this.telpPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#telp');
    this.fotoPetugas = page.getByRole('dialog', { name: 'Edit Profil Petugas' }).locator('#foto_profil');

    this.checkModalEdit = page.getByRole('heading', { name: 'Edit Profil Petugas' });
    this.simpanEdit = page.getByRole('button', { name: 'Simpan' });
    this.back = page.getByText('List Petugas');
  }

  async editPetugas(nama : string, foto : string, email : string, telp : string){
    await this.buttonEditPetugas.click();
    await expect(this.checkModalEdit).toBeVisible();
    await this.namaPetugas.fill(nama);
    await this.fotoPetugas.setInputFiles(foto);
    await this.telpPetugas.fill(telp);
    await this.emailPetugas.fill(email);
    await this.simpanEdit.click();
    await expect(this.back).toBeVisible();
  }
}
