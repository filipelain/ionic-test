import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NetworkComponent} from './network/network.component';
import {NetworkRoutingModule} from './network-routing.module';
import {IonicModule} from '@ionic/angular';
import {NameNetworkComponent} from './name-network/name-network.component';
import {Network} from '@ionic-native/network/ngx';
import {NetworkInterface} from '@ionic-native/network-interface/ngx';
import {NgxQRCodeModule} from 'ngx-qrcode2';


@NgModule({
    declarations: [NetworkComponent, NameNetworkComponent],
    imports: [
        CommonModule,
        IonicModule,
        NgxQRCodeModule
    ],
    exports: [NetworkComponent, NameNetworkComponent],
    providers: [Network, NetworkInterface]
})
export class NetworkModule {
}
