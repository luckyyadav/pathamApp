import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoGalleryRoutingModule } from './photo-gallery-routing.module';
import { CommonImportModule } from '../../featureModule/commonImport.module';
import { MyMaterialModule } from '../../featureModule/my-material.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PhotoGalleryRoutingModule,
    CommonImportModule,
    MyMaterialModule,
  ],
})
export class PhotoGalleryModule { }
