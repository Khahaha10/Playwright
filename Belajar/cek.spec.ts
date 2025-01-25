import { test as base, BrowserContext, Page } from '@playwright/test';

import { PlaywrightLoginAdmin } from './project ujikom/admin/login-admin';
import { PlaywrightLogoutAdmin } from './project ujikom/admin/logout-admin';
import { PlaywrightEditProfil } from './project ujikom/admin/edit-profil';
import { PlaywrightGoToHome } from './project ujikom/admin/home-admin';

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

import { PlaywrightLoginMasyarakat } from './project ujikom/masyarakat/login-masyarakat';
import { PlaywrightLogoutMasyarakat } from './project ujikom/masyarakat/logout-masyarakat';
import { PlaywrightGoToHomeMs } from './project ujikom/masyarakat/home-masyarakat';
import { PlaywrightEditProfilMs } from './project ujikom/masyarakat/edit-profil';

import { PlaywrightAddPengaduan } from './project ujikom/masyarakat/pengaduan/add-pengaduan';
import { PlaywrightEditPengaduan } from './project ujikom/masyarakat/pengaduan/edit-pengaduan';
import { PlaywrightDeletePengaduanMs } from './project ujikom/masyarakat/pengaduan/delete-pengaduan';

let context: BrowserContext;
let page: Page;

type MyFixtures = {
  loginAdminPage: PlaywrightLoginAdmin;
  logoutAdminPage: PlaywrightLogoutAdmin;
  editProfilPage: PlaywrightEditProfil;
  homePage: PlaywrightGoToHome;

  masyarakatPage: PlaywrightGoToMasyarakat;
  addMasyarakatPage: PlaywrightAddMasyarakat;
  editMasyarakatPage: PlaywrightEditMasyarakat;
  deleteMasyarakatPage: PlaywrightDeleteMasyarakat;

  petugasPage: PlaywrightGoToPetugas;
  addPetugasPage: PlaywrightAddPetugas;
  editPetugasPage: PlaywrightEditPetugas;
  deletePetugasPage: PlaywrightDeletePetugas;

  pengaduanPage: PlaywrightGoToPengaduan;
  addTanggapanPage: PlaywrightAddTanggapan;
  editTanggapanPage: PlaywrightEditTanggapan;
  deletePengaduanPage: PlaywrightDeletePengaduan;
  reportPengaduanPage: PlaywrightReportPengaduan;

  forumPage: PlaywrightGoToForum;
  deleteForumPage: PlaywrightDeleteForum;
  deleteReplyPage: PlaywrightDeleteReply;

  loginMasyarakatPage: PlaywrightLoginMasyarakat;
  homeMsPage: PlaywrightGoToHomeMs;
  editProfilMsPage: PlaywrightEditProfilMs;
  logoutMasyarakatPage: PlaywrightLogoutMasyarakat;

  addPengaduanPage: PlaywrightAddPengaduan;
  editPengaduanPage: PlaywrightEditPengaduan;
  deletePengaduanPageMs: PlaywrightDeletePengaduanMs;
};

export const test = base.extend<MyFixtures>({
  loginAdminPage: async ({}, use) => {
    await use(new PlaywrightLoginAdmin(page));
  },
  logoutAdminPage: async ({}, use) => {
    await use(new PlaywrightLogoutAdmin(page));
  },
  editProfilPage: async ({}, use) => {
    await use(new PlaywrightEditProfil(page));
  },
  homePage: async ({}, use) => {
    await use(new PlaywrightGoToHome(page));
  },

  masyarakatPage: async ({}, use) => {
    await use(new PlaywrightGoToMasyarakat(page));
  },
  addMasyarakatPage: async ({}, use) => {
    await use(new PlaywrightAddMasyarakat(page));
  },
  editMasyarakatPage: async ({}, use) => {
    await use(new PlaywrightEditMasyarakat(page));
  },
  deleteMasyarakatPage: async ({}, use) => {
    await use(new PlaywrightDeleteMasyarakat(page));
  },

  petugasPage: async ({}, use) => {
    await use(new PlaywrightGoToPetugas(page));
  },
  addPetugasPage: async ({}, use) => {
    await use(new PlaywrightAddPetugas(page));
  },
  editPetugasPage: async ({}, use) => {
    await use(new PlaywrightEditPetugas(page));
  },
  deletePetugasPage: async ({}, use) => {
    await use(new PlaywrightDeletePetugas(page));
  },

  pengaduanPage: async ({}, use) => {
    await use(new PlaywrightGoToPengaduan(page));
  },
  addTanggapanPage: async ({}, use) => {
    await use(new PlaywrightAddTanggapan(page));
  },
  editTanggapanPage: async ({}, use) => {
    await use(new PlaywrightEditTanggapan(page));
  },
  deletePengaduanPage: async ({}, use) => {
    await use(new PlaywrightDeletePengaduan(page));
  },
  reportPengaduanPage: async ({}, use) => {
    await use(new PlaywrightReportPengaduan(page));
  },

  forumPage: async ({}, use) => {
    await use(new PlaywrightGoToForum(page));
  },
  deleteForumPage: async ({}, use) => {
    await use(new PlaywrightDeleteForum(page));
  },
  deleteReplyPage: async ({}, use) => {
    await use(new PlaywrightDeleteReply(page));
  },

  loginMasyarakatPage: async ({}, use) => {
    await use(new PlaywrightLoginMasyarakat(page));
  },
  homeMsPage: async ({}, use) => {
    await use(new PlaywrightGoToHomeMs(page));
  },
  editProfilMsPage: async ({}, use) => {
    await use(new PlaywrightEditProfilMs(page));
  },
  logoutMasyarakatPage: async ({}, use) => {
    await use(new PlaywrightLogoutMasyarakat(page));
  },

  addPengaduanPage: async ({}, use) => {
    await use(new PlaywrightAddPengaduan(page));
  },
  editPengaduanPage: async ({}, use) => {
    await use(new PlaywrightEditPengaduan(page));
  },
  deletePengaduanPageMs: async ({}, use) => {
    await use(new PlaywrightDeletePengaduanMs(page));
  },
});

test.describe('Admin', () => {

  test.beforeAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginAdminPage = new PlaywrightLoginAdmin(page);
    await page.goto('/login');
    await loginAdminPage.loginAdmin('admin@gmail.com', 'admin123');
  });

  test.beforeEach(async ({ homePage }) => {
    await homePage.goToHome();
  });

  test.afterEach(async ({ page }) => {
    await page.reload();
  });

  test.afterAll(async ({ logoutAdminPage }) => {
    await logoutAdminPage.logoutAdmin();
    await context.close();
  });

  test('show home', async ({homePage}) => {
    await homePage.goToHome();
  });

  test('show masyarakat', async ({masyarakatPage}) => {
    await masyarakatPage.goToMasyarakat();
  });

  test('add masyarakat', async ({masyarakatPage ,addMasyarakatPage}) => {
    await masyarakatPage.goToMasyarakat();
    await addMasyarakatPage.addMasyarakat();
  });

  test('edit masyarakat', async ({masyarakatPage, editMasyarakatPage}) => {
    await masyarakatPage.goToMasyarakat();
    await editMasyarakatPage.editMasyarakat();
  });

  test('delete masyarakat', async ({masyarakatPage, deleteMasyarakatPage}) => {
    await masyarakatPage.goToMasyarakat();
    await deleteMasyarakatPage.deleteMasyarakat();
  });

  test('show petugas', async ({petugasPage}) => {
    await petugasPage.goToPetugas();
  });

  test('add petugas', async ({petugasPage, addPetugasPage}) => {
    await petugasPage.goToPetugas();
    await addPetugasPage.addPetugas();
  });

  test('edit petugas', async ({petugasPage, editPetugasPage}) => {
    await petugasPage.goToPetugas();
    await editPetugasPage.editPetugas();
  });
  
  test('delete petugas', async ({petugasPage, deletePetugasPage}) => {
    await petugasPage.goToPetugas();
    await deletePetugasPage.deletePetugas();
  });
  
  test('show pengaduan', async ({pengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
  });

  test('add tanggapan', async ({pengaduanPage, addTanggapanPage}) => {
    await pengaduanPage.goToPengaduan();
    await addTanggapanPage.addTanggapan();
  });

  test('edit tanggapan', async ({pengaduanPage, editTanggapanPage}) => {
    await pengaduanPage.goToPengaduan();
    await editTanggapanPage.editTanggapan();
  });

  test('delete pengaduan', async ({pengaduanPage, deletePengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
    await deletePengaduanPage.deletePengaduan();
  });

  test('report pengaduan', async ({pengaduanPage, reportPengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
    await reportPengaduanPage.reportPengaduan();
  });
  
  test('show forum', async ({forumPage}) => {
    await forumPage.goToForum();
  });

  test('delete reply', async ({forumPage, deleteReplyPage}) => {
    await forumPage.goToForum();
    await deleteReplyPage.deleteReply();
  });

  test('delete forum', async ({forumPage, deleteForumPage}) => {
    await forumPage.goToForum();
    await deleteForumPage.deleteForum();
  });

  test('edit profil', async ({editProfilPage}) => {
    await editProfilPage.editProfil();
  });
});

test.describe('Petugas', () => {

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    const loginAdminPage = new PlaywrightLoginAdmin(page);
    await page.goto('/login');
    await loginAdminPage.loginAdmin('petugas1@gmail.com', 'petugas123');
  });

  test.beforeEach(async ({ homePage }) => {
    await homePage.goToHome();
  });

  test.afterEach(async ({ page }) => {
    await page.reload();
  });

  test.afterAll(async ({ logoutAdminPage }) => {
    await logoutAdminPage.logoutAdmin();
    await context.close();
  });

  test('show home', async ({homePage}) => {
    await homePage.goToHome();
  });

  test('show pengaduan', async ({pengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
  });

  test('add tanggapan', async ({pengaduanPage, addTanggapanPage}) => {
    await pengaduanPage.goToPengaduan();
    await addTanggapanPage.addTanggapan();
  });

  test('edit tanggapan', async ({pengaduanPage, editTanggapanPage}) => {
    await pengaduanPage.goToPengaduan();
    await editTanggapanPage.editTanggapan();
  });

  test('report pengaduan', async ({pengaduanPage, reportPengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
    await reportPengaduanPage.reportPengaduan();
  });

  test('show forum', async ({forumPage}) => {
    await forumPage.goToForum();
  });

  test('edit profil', async ({editProfilPage}) => {
    await editProfilPage.editProfil();
  });
});

test.describe('Masyarakat', () => {
  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    const loginMasyarakatPage = new PlaywrightLoginMasyarakat(page);
    await page.goto('/login');
    await loginMasyarakatPage.loginMasyarakat('masyarakat1@gmail.com', 'masyarakat123');
  });

  test.beforeEach(async ({ homePage }) => {
    await homePage.goToHome();
  });

  test.afterEach(async ({ page }) => {
    await page.reload();
  });

  test.afterAll(async ({ logoutMasyarakatPage }) => {
    await logoutMasyarakatPage.logoutMasyarakat();
    await context.close();
  });

  test('show home', async ({homeMsPage}) => {
    await homeMsPage.goToHome();
  });

  test('show forum', async ({forumPage}) => {
    await forumPage.goToForum();
  });

  test('show pengaduan', async ({pengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
  });

  test('add pengaduan', async ({pengaduanPage, addPengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
    await addPengaduanPage.addPengaduan();
  });

  test('edit pengaduan', async ({pengaduanPage, editPengaduanPage}) => {
    await pengaduanPage.goToPengaduan();
    await editPengaduanPage.editPengaduan();
  });

  test('delete pengaduan', async ({pengaduanPage, deletePengaduanPageMs}) => {
    await pengaduanPage.goToPengaduan();
    await deletePengaduanPageMs.deletePengaduanMs();
  });

  test('edit profil', async ({editProfilMsPage}) => {
    await editProfilMsPage.editProfilMs();
  });
});