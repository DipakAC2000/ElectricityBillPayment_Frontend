import { Component } from '@angular/core';
import { Connection } from 'src/app/models/connection.model';
import { ConnectionserviceService } from 'src/app/services/connectionservice.service';

@Component({
  selector: 'app-update-connection',
  templateUrl: './update-connection.component.html',
  styleUrls: ['./update-connection.component.css']
})
export class UpdateConnectionComponent {
  inactiveConnections: Connection[];

  constructor(private connectionService: ConnectionserviceService) {}

  ngOnInit(): void {
    this.fetchInactiveConnections();
  }

  fetchInactiveConnections() {
    // Assuming your service has a method to get inactive connections
    this.connectionService.getInactiveConnections().subscribe(
      (connections) => {
        this.inactiveConnections = connections || [];
      },
      (error) => {
        console.error('Error fetching inactive connections:', error);
      }
    );
  }

  approveConnection(connection: Connection) {
    connection.connectionStatus = true; // Assuming 'Active' is the new status
    connection.connectionDate = new Date(); // Update with the current date

    // Updating the connection using the service
    this.connectionService.updateConnection(connection.consumerNumber,connection).subscribe(
      (updatedConnection) => {
        console.log('Connection approved successfully:', updatedConnection);
        this.fetchInactiveConnections();
      },
      (error) => {
        console.error('Error approving connection:', error);
      }
    );
  }
}