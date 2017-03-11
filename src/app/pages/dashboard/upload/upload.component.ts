import { Component } from '@angular/core';
import { FileUploader, Headers } from 'ng2-file-upload';

@Component({
    selector: 'app-home',
    styleUrls: ['./upload.component.css'],
    templateUrl: './upload.component.html'
})
export class UploadComponent {
    public uploader: FileUploader;
    public hasBaseDropZoneOver: boolean = false;
    public endpoint: string = "https://data-upload-my-data.cfapps.io/dataset";
    private maxFileSize: number = 1073741824;
    private maxFileAmount: number = 128;
    private sizeError: boolean = false;
    private amountError: boolean = false;

    constructor() {
        let options = {
            url: this.endpoint,
            maxFileSize: this.maxFileSize,
            queueLimit: this.maxFileAmount,
            additionalParameter: { name: "dataset" }
        }
        this.uploader = new FileUploader(options);

        this.uploader.onWhenAddingFileFailed = (fileItem) => {
            if (fileItem.size > this.maxFileSize) {
                this.sizeError = true;
                setTimeout(() => {
                    this.sizeError = false;
                }, 3000)
            }
            if (this.uploader.queue.length >= this.maxFileAmount) {
                this.amountError = true;
                setTimeout(() => {
                    this.amountError = false;
                }, 3000)
            }
        }

        this.uploader.onErrorItem = (fileItem) => {
            console.log("error", fileItem);
            //this.failFlag = true;
        }
        /*
        this.uploader.onErrorItem = _ngZone.run(() => function(item, response, status, headers) {
            console.log(response);
        });
        */
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public setEndpoint() {
        this.uploader.options.url = this.endpoint;
    }

}
