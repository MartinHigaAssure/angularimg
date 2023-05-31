import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  fileName = '';

    constructor(private http: HttpClient) {}
    ngOnInit(): void {
      throw new Error('Method not implemented.');
    }

    onFileSelected(event:any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("imagen", file);

            const upload$ = this.http.post("http://localhost:3000/auth/imagen", formData);

            upload$.subscribe(
                (res) => {
                    console.log(res);
                }
            );
        }
    }

}
