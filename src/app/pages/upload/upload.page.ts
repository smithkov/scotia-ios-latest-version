import { Component, OnInit } from "@angular/core";
import { Application } from "../../models/application";
import { AuthenticationService } from "./../../authentication.service";
import { Observable } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { ModalController } from "@ionic/angular";
import { ModalPage } from "../modal/modal.page";
import { AlertServiceService } from "./../../alert-service.service";
import { LoaderServiceService } from "./../../loader-service.service";
import { Chooser } from '@ionic-native/chooser/ngx';
import { NgForm } from "@angular/forms";

import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import { File } from "@ionic-native/file/ngx";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.page.html",
  styleUrls: ["./upload.page.scss"]
})
export class UploadPage implements OnInit {

  app: any;
  postalAddress: any;
  homeAddress: any;
  phone: any;
  id: any;
  fd: any;
  hasPrevFile: Boolean = false;
  fileName: any;
  fileType: any;
  userId: any;
  base64: any;
  hasSelected: Boolean = false;
  private returnPath: any;
  path: any;
  fileTransfer: FileTransferObject = this.transfer.create();
  constructor(
    private authenticationService: AuthenticationService,
    private loaderService: LoaderServiceService,
    public router: Router,
    private alertService: AlertServiceService,
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
    private file: File,
    private filePath: FilePath,
    private chooser: Chooser
  ) { }

  ngOnInit() {
    this.authenticationService.getCurrentUser().then(e => {
      this.userId = e.id;
      this.authenticationService.getApplication().then(app => {
        if (app) {
          this.id = app.id;

          if (app.credential) {
            this.hasPrevFile = true;
          }
        }
      });
    });
  }
  viewPdf() {
    this.fileOpener
      .showOpenWithDialog(this.returnPath, "application/pdf")
      .then(() => console.log("File is opened"))
      .catch(e => console.log("Error opening file", e));
  }

  next() {
    this.router.navigate(["pages/finalForm"]);
  }


  onSelect(fileInput: any) {
    var file = fileInput.target.files[0];

    this.fd = new FormData();
    this.fileName = file.name;
    this.fileType = this.fileName.substring(file.name.lastIndexOf(".") + 1);

    this.fd.append("credential", file);
    this.fd.append("userId", this.userId);
    this.fd.append("id", this.id);
    if (this.fileType.toLowerCase() === "pdf") {
      this.hasSelected = true;

    } else {
      this.hasSelected = false;
      this.alertService.presentToast(
        "Only a PDF type document is allowed."
      );

    }
  }
  
  upload() {
    this.loaderService.showLoader("Saving document ...");

    // let postData = new FormData();
    // postData.append("credential", this.returnPath);
    // postData.append("userId",this.userId);
    // postData.append("id",this.id);
    this.authenticationService
      .upload(this.fd)
      .subscribe(data => {
        if (data.error) {
          this.loaderService.hideLoader();
          this.alertService.presentToast(
            "The server couldn't save this, try again later."
          );
          //this.showForm(false, true, false, false, false);
        } else {
          this.loaderService.hideLoader();
          this.router.navigate(["pages/finalForm"]);
        }
      }),
      (err) => {
        this.loaderService.hideLoader();
        this.alertService.presentToast("Server not available");
      };
  }

}
