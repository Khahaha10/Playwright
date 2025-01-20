import { test, expect } from '@playwright/test';

import { PlaywrightLoginAdmin } from './project ujikom/admin/login-admin';

import { PlaywrightGoToPetugas } from './project ujikom/admin/petugas/petugas';
import { PlaywrightAddPetugas } from './project ujikom/admin/petugas/add-petugas';
import { PlaywrightEditPetugas } from './project ujikom/admin/petugas/edit-petugas';
import { PlaywrightDeletePetugas } from './project ujikom/admin/petugas/delete-petugas';

import { PlaywrightGoToMasyarakat } from './project ujikom/admin/masyarakat/masyarakat';
import { PlaywrightAddMasyarakat } from './project ujikom/admin/masyarakat/add-masyarakat';
import { PlaywrightEditMasyarakat } from './project ujikom/admin/masyarakat/edit-masyarakat';
import { PlaywrightDeleteMasyarakat } from './project ujikom/admin/masyarakat/delete-masyarakat';

import { PlaywrightGoToPengaduan } from './project ujikom/admin/tanggapan/tanggapan';
import { PlaywrightAddTanggapan } from './project ujikom/admin/tanggapan/add-tanggapan';

test.describe('Admin', () => {
  let loginAdminPage: PlaywrightLoginAdmin;

  let masyarakatPage: PlaywrightGoToMasyarakat;
  let addMasyarakatPage: PlaywrightAddMasyarakat;
  let editMasyarakatPage: PlaywrightEditMasyarakat;
  let deleteMasyarakatPage: PlaywrightDeleteMasyarakat;

  let petugasPage: PlaywrightGoToPetugas;
  let addPetugasPage: PlaywrightAddPetugas;
  let editPetugasPage: PlaywrightEditPetugas;
  let deletePetugasPage: PlaywrightDeletePetugas;

  let pengaduanPage: PlaywrightGoToPengaduan;
  let addTanggapanPage: PlaywrightAddTanggapan;
  
  test.beforeEach(async ({ page }) => {
    loginAdminPage = new PlaywrightLoginAdmin(page);

    masyarakatPage = new PlaywrightGoToMasyarakat(page);
    addMasyarakatPage = new PlaywrightAddMasyarakat(page);
    editMasyarakatPage = new PlaywrightEditMasyarakat(page);
    deleteMasyarakatPage = new PlaywrightDeleteMasyarakat(page);

    petugasPage = new PlaywrightGoToPetugas(page);
    addPetugasPage = new PlaywrightAddPetugas(page);
    editPetugasPage = new PlaywrightEditPetugas(page);
    deletePetugasPage = new PlaywrightDeletePetugas(page);

    pengaduanPage = new PlaywrightGoToPengaduan(page);
    addTanggapanPage = new PlaywrightAddTanggapan(page);

    await page.goto('http://localhost:8000/');
    await loginAdminPage.loginAdmin('admin@gmail.com', 'admin123');
  });

  test('add masyarakat', async () => {
    await masyarakatPage.goToMasyarakat();
    await addMasyarakatPage.addMasyarakat(
      'tes 123',
      '000112111323', 
      'tes123@gmail.com',
      '000001312312',
      'tes12345'
      );
  });

  test('edit masyarakat', async () => {
    await masyarakatPage.goToMasyarakat();
    await editMasyarakatPage.editMasyarakat(
      'edit 123',
      '000112111323', 
      'Screenshot 2024-03-06 090435.png',
      'edit123@gmail.com',
      '000001312312',
      'edit12345'
      );
  });

  test('delete masyarakat', async () => {
    await masyarakatPage.goToMasyarakat();
    await deleteMasyarakatPage.deleteMasyarakat();
  })

  test('add petugas', async () => {
    await petugasPage.goToPetugas();
    await addPetugasPage.addPetugas(
      'petugas tes 123',
      'petugastes123@gmail.com',
      '083213123123',
      'tes12345'
    );
  });

  test('edit petugas', async () => {
    await petugasPage.goToPetugas();
    await editPetugasPage.editPetugas(
      'Budi',
      'Screenshot 2024-03-06 090435.png',
      'petugasedit@gmail.com',
      '000001312312'
      );
  });
  
  test('delete petugas', async () => {
    await petugasPage.goToPetugas();
    await deletePetugasPage.deletePetugas();
  })
  
  test('add tanggapan', async () => {
    await pengaduanPage.goToPengaduan();
    await addTanggapanPage.addTanggapan('mantap 123');
  });
});