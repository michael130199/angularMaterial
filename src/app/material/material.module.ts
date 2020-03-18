import { NgModule } from '@angular/core';
import {
    MatButtonModule, 
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatSelectModule
} from '@angular/material';

@NgModule({
    imports:[
        MatButtonModule, 
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule
    ],
    exports:[
        MatButtonModule, 
        MatIconModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule
    ]
})

export class MaterialModule {}