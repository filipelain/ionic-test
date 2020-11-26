import {Component, OnInit} from '@angular/core';
import {Network} from '@ionic-native/network/ngx';
import {NetworkInterface} from '@ionic-native/network-interface/ngx';


@Component({
    selector: 'app-name-network',
    templateUrl: './name-network.component.html',
    styleUrls: ['./name-network.component.scss'],
})
export class NameNetworkComponent implements OnInit {

    constructor(private network: Network, private networkInterface: NetworkInterface) {
    }

    ngOnInit() {
        // watch network for a disconnection
        const disconnectSubscription = this.network.onDisconnect().subscribe(() => {
            console.log('network was disconnected :-(');
        });

        // stop disconnect watch
        // disconnectSubscription.unsubscribe();


        // watch network for a connection
        const connectSubscription = this.network.onConnect().subscribe(() => {
            console.log('network connected!');
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(() => {
                if (this.network.type === 'wifi') {
                    console.log('we got a wifi connection, woohoo!');
                }
            }, 3000);
        });
        console.log(`Tipo é `, this.network.type);
        // stop connect watch
        // connectSubscription.unsubscribe();


        this.networkInterface.getWiFiIPAddress()
            .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
            .catch(error => console.error(`Unable to get IP: ${error}`));

        this.networkInterface.getCarrierIPAddress()
            .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
            .catch(error => console.error(`Unable to get IP: ${error}`));

        const url = 'www.github.com';
        this.networkInterface.getHttpProxyInformation(url)
            .then(proxy => console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`))
            .catch(error => console.error(`Unable to get proxy info: ${error}`));
    }

}

