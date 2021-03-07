import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';
  title = 'vHugs'
  displayMessage = false;
  fileInfos: Observable<any>;
  ngOnInit() {
    this.fileInfos = this.uploadService.getFiles();
  }
  getFiles(){
    this.fileInfos = this.uploadService.getFiles();
  }
  constructor(private uploadService: UploadFileService,private router:Router) { }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.displayMessage = true;
    this.progress = 0;
    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });
      setTimeout(()=>{                           
        this.displayMessage = false; this.progress = 0;}, 1500);
    this.selectedFiles = undefined;
  }
  deleteFile(url){
    console.log(url)
    this.uploadService.deleteFile(url).subscribe(data=>{
      console.log(data);
      this.fileInfos = this.uploadService.getFiles();
    })
    this.router.navigate(['test']);
  }
}