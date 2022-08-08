import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { StorageService } from 'src/app/services/storage/storage.service';
import { StorageType } from 'src/app/services/storage/storage.type';

@Component({
  templateUrl: './news-create.component.html',
  styleUrls: ['./news-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsCreateComponent {
  constructor(
    public dialogRef: MatDialogRef<NewsCreateComponent>,
    private _fb: FormBuilder,
    private _storageService: StorageService,
    private _cdr: ChangeDetectorRef
  ) {}

  public form: FormGroup = this._fb.group({
    description: [null, [Validators.required]],
    title: [null, [Validators.required]],
    titleImageUrl: [null],
  });

  public saveNews() {
    const data = {
      ...this.form.value,
      categoryType: 'Локальные новости',
      publishedDate: new Date(),
    };
    this._storageService.setItem(StorageType.NEWS, data);
    this.dialogRef.close('confirm');
  }

  public onFileSelected() {
    const inputNode: any = document.querySelector('#file');
    if (typeof FileReader !== 'undefined') {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        this.form.patchValue({
          titleImageUrl: reader.result,
        });
        this._cdr.markForCheck();
      });
      reader.readAsDataURL(inputNode.files[0]);
    }
  }
}
