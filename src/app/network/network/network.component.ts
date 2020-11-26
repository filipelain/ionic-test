import {Component, OnDestroy, OnInit} from '@angular/core';
import {NetworkStatus, PluginListenerHandle, Plugins} from '@capacitor/core';

const {Network, Geolocation} = Plugins;

@Component({
    selector: 'app-network',
    templateUrl: './network.component.html',
    styleUrls: ['./network.component.scss'],
})
export class NetworkComponent implements OnInit, OnDestroy {

    networkLissener: PluginListenerHandle;
    networkStatus: NetworkStatus;
    dataAtual: string;
    createdCode: string;
    elementType = 'url';

    constructor() {
    }

    async ngOnInit() {
        this.networkLissener = Network.addListener('networkStatusChange', status => {
            console.log(`Network status change`, status);
            this.networkStatus = status;
        });
        this.networkStatus = await Network.getStatus();
    }

    ngOnDestroy(): void {
        this.networkLissener.remove();
    }


    ponto() {
        this.dataAtual = (new Date()).toLocaleString('pt-br');
        console.log(`Ponto Registrado as ${this.dataAtual}`);
        const position = Geolocation.getCurrentPosition();
        console.log('Posição atual ', position);
        this.createdCode = `oiii`;


    }


}
