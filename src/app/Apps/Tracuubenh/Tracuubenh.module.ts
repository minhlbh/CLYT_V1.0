import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TracuubenhComponent } from './Tracuubenh.component';
import { DanhSachBenhComponent } from './danh-sach-benh/danh-sach-benh.component';
import { ChiTietBenhComponent } from './chi-tiet-benh/chi-tiet-benh.component';
import { ForumBarComponent } from './forum-bar/forum-bar.component';


const routing: Routes = [
  { path: '', component: TracuubenhComponent }
];

const Routing: ModuleWithProviders = RouterModule.forChild(routing);

@NgModule({
  imports: [
    CommonModule,
    Routing
  ],
  declarations: [TracuubenhComponent,
    DanhSachBenhComponent,
    ChiTietBenhComponent,
    ForumBarComponent
]
})
export class TracuubenhModule { }
