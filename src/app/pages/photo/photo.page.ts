import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import {
  Camera,
  CameraOptions,
  PictureSourceType
} from "@ionic-native/camera/ngx";
import {
  ActionSheetController,
  ToastController,
  Platform,
  LoadingController
} from "@ionic/angular";
import { FileOpener } from "@ionic-native/file-opener/ngx";
import { File, FileEntry } from "@ionic-native/file/ngx";
import { AuthenticationService } from "../../authentication.service";
import { environment } from "../../../environments/environment";
import { LoaderServiceService } from "./../../loader-service.service";
import { WebView } from "@ionic-native/ionic-webview/ngx";
import { Storage } from "@ionic/storage";
import { FilePath } from "@ionic-native/file-path/ngx";
import { HttpClient } from "@angular/common/http";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { finalize } from "rxjs/operators";
import { AlertServiceService } from "./../../alert-service.service";

@Component({
  selector: "app-photo",
  templateUrl: "./photo.page.html",
  styleUrls: ["./photo.page.scss"]
})
export class PhotoPage implements OnInit {
  capturedImage: any = { path: "", filePath: "" };
  userId: any;
  image: any;
  img:any;
  hasNewImage:Boolean = false;
  public returnPath:any;
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(
    private loaderService: LoaderServiceService,
    private alertService: AlertServiceService,
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
    private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private storage: Storage,
    private plt: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath,
    
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.getCurrentUser().then((user: any) => {
      this.userId = user.id;
      this.img = environment.photoUrl + user.photo;
    });
  }

 
  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: "bottom",
      duration: 3000
    });
    toast.present();
  }
  ngOnInit() {
    this.plt.ready().then(() => {});
  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: "Use Camera",
          handler: () => {
            this.takePicture(this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: "Cancel",
          role: "cancel"
        }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options = {
      quality: 100,
      allowEdit:true,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
     this.returnPath = imagePath;
     this.hasNewImage = true;

    let filename = imagePath.substring(imagePath.lastIndexOf('/')+1);
    let path =  imagePath.substring(0,imagePath.lastIndexOf('/')+1);
    
    this.file.readAsDataURL(path, filename).then(res=> this.img = res  );
    });
  }

  // startUpload() {
  //   this.file
  //     .resolveLocalFilesystemUrl(this.capturedImage.filePath)
  //     .then(entry => {
  //       (<FileEntry>entry).file(file => this.readFile(file));
  //     })
  //     .catch(err => {
  //       this.presentToast("Error while reading file.");
  //     });
  // }

  upload() {
    this.loaderService.showLoader("Saving document ...");
    let options = {
      mimeType: 'multipart/form-data',
      chunkedMode: false,
      fileKey: 'file',
      params:{"userId": this.userId}
    };
    this.fileTransfer
    .upload(
      this.returnPath,
      `${environment.url}/user/photo`,
      options
    )
    .then(
      data => {
        this.loaderService.hideLoader();
        this.presentToast("Your profile photo was update successfully");
      },
      err => {
        this.loaderService.hideLoader();
        this.alertService.presentToast(
          "The server couldn't save this, try again later."
        );
      }
    );
  }

}
