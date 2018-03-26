export class PurchaseRequest {
	ID: number;
	UserID: string;
	Description: string;
	Justification: string;
	DeliveryMode: number; 
	StatusID: string;
	Total: string; 
	Active: boolean;
	ReasonForRejection: string;
	DateCreated: Date;

constructor(
	ID: number,
	UserID: string,
	Description: string,
	Justification: string,
	DeliveryMode: number,
	StatusID: string,
	Total: string, 
	Active: boolean,
	ReasonForRejection: string,
	DateCreated: Date,
		
	)
	{
	this.ID = ID;
	this.UserID = UserID;
	this.Description = Description;
	this.Justification = Justification;
	this.DeliveryMode = DeliveryMode;
	this.StatusID = StatusID;
	this.Total = Total;
	this.Active =  Active;
	this.ReasonForRejection = ReasonForRejection;
	this.DateCreated = DateCreated;

	}
}