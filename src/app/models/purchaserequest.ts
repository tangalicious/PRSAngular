import { User } from './user';

export class PurchaseRequest {
	ID: number;
	UserID: number;
	Description: string;
	Justification: string;
	DeliveryMode: string; 
	Status: string;
	Total: number; 
	Active: boolean;
	ReasonForRejection: string;
	

constructor(
	ID: number,
	UserID: number,
	Description: string,
	Justification: string,
	DeliveryMode: string,
	Status: string,
	Total: number, 
	Active: boolean,
	ReasonForRejection: string,
	
	)
	{
	this.ID = ID;
	this.UserID = UserID;
	this.Description = Description;
	this.Justification = Justification;
	this.DeliveryMode = DeliveryMode;
	this.Status = Status;
	this.Total = Total;
	this.Active =  Active;
	this.ReasonForRejection = ReasonForRejection;
	}
}