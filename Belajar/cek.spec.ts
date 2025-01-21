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
import { PlaywrightEditTanggapan } from './project ujikom/admin/tanggapan/edit-tanggapan';
import { PlaywrightDeletePengaduan } from './project ujikom/admin/tanggapan/delete-tanggapan';
import { PlaywrightReportPengaduan } from './project ujikom/admin/tanggapan/report-tanggapan';

import { PlaywrightGoToForum } from './project ujikom/admin/forum/forum';
import { PlaywrightDeleteForum } from './project ujikom/admin/forum/delete-forum';
import { PlaywrightDeleteReply } from './project ujikom/admin/forum/delete-reply';

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
  let editTanggapanPage: PlaywrightEditTanggapan;
  let deletePengaduanPage: PlaywrightDeletePengaduan;
  let reportPengaduanPage: PlaywrightReportPengaduan;
  
  let forumPage: PlaywrightGoToForum;
  let deleteForumPage: PlaywrightDeleteForum;
  let deleteReplyPage: PlaywrightDeleteReply;

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
    editTanggapanPage = new PlaywrightEditTanggapan(page);
    deletePengaduanPage = new PlaywrightDeletePengaduan(page);
    reportPengaduanPage = new PlaywrightReportPengaduan(page);
    
    forumPage = new PlaywrightGoToForum(page);
    deleteForumPage = new PlaywrightDeleteForum(page);
    deleteReplyPage = new PlaywrightDeleteReply(page);

    await page.goto('http://localhost:8000/');
    await loginAdminPage.loginAdmin('admin@gmail.com', 'admin123');
  });

  test('add masyarakat', async () => {
    await masyarakatPage.goToMasyarakat();
    await addMasyarakatPage.addMasyarakat();
  });

  test('edit masyarakat', async () => {
    await masyarakatPage.goToMasyarakat();
    await editMasyarakatPage.editMasyarakat();
  });

  test('delete masyarakat', async () => {
    await masyarakatPage.goToMasyarakat();
    await deleteMasyarakatPage.deleteMasyarakat();
  })

  test('add petugas', async () => {
    await petugasPage.goToPetugas();
    await addPetugasPage.addPetugas();
  });
  test('edit petugas', async () => {
    await petugasPage.goToPetugas();
    await editPetugasPage.editPetugas();
  });
  
  test('delete petugas', async () => {
    await petugasPage.goToPetugas();
    await deletePetugasPage.deletePetugas();
  })
  
  test('add tanggapan', async () => {
    await pengaduanPage.goToPengaduan();
    await addTanggapanPage.addTanggapan();
  });

  test('edit tanggapan', async () => {
    await pengaduanPage.goToPengaduan();
    await editTanggapanPage.editTanggapan();
  });

  test('delete pengaduan', async () => {
    await pengaduanPage.goToPengaduan();
    await deletePengaduanPage.deletePengaduan();
  })

  test('report pengaduan', async () => {
    await pengaduanPage.goToPengaduan();
    await reportPengaduanPage.reportPengaduan();
  })
  
  test('delete forum', async () => {
    await forumPage.goToForum();
    await deleteForumPage.deleteForum();
  })

  test('delete reply', async () => {
    await forumPage.goToForum();
    await deleteReplyPage.deleteReply();
  })
});