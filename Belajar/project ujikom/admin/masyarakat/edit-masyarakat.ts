import { expect, type Locator, type Page } from '@playwright/test';

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
    this.buttonEditMasyarakat = page.getByRole('row', { name: '5 Foto Profil edit 123' }).getByRole('link');

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

  async editMasyarakat(nama : string, nik : string, foto : string, email : string, telp : string, password : string){
    await this.buttonEditMasyarakat.click();
    await expect(this.checkModalEdit).toBeVisible();
    await this.namaMasyarakat.fill(nama);
    await this.nikMasyarakat.fill(nik);
    await this.fotoMasyarakat.setInputFiles(foto);
    await this.emailMasyarakat.fill(email);
    await this.telpMasyarakat.fill(telp);
    await this.passwordMasyarakat.fill(password);
    await this.konfirmasiPasswordMasyarakat.fill(password);
    await this.simpanEdit.click();
    await expect(this.back).toBeVisible();
  }
}