import { Route, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";

const routes: Route[] = [
    { path: '', component: HeaderComponent },
    

];
@NgModule({
    imports: [
    ],
   
})
export class AppRountingModule {}