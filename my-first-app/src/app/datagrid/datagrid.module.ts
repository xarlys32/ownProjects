import { NgModule } from "@angular/core";
import { AgGridModule } from "ag-grid-angular";
import { DatagridComponent } from './datagrid.component';

@NgModule({
    declarations: [DatagridComponent],
    imports: [
        AgGridModule.withComponents([])
    ],
    providers: []
})

export class DataGridModule { }