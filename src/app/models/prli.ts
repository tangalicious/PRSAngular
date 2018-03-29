import { PurchaseRequest } from './purchaserequest';
import { Product } from './product';

export class PRLI {
	ID: number;
	PurchaseRequestID: number;
	ProductID: number;
	Quantity: number;
	Price: number;
	Subtotal: number;

constructor(
	ID: number,
	PurchaseRequestID: number,
	ProductID: number,
	Quantity: number,
	Price: number,
	Subtotal: number,
)
{
	this.ID = ID ;
	this.PurchaseRequestID = PurchaseRequestID ;
	this.ProductID = ProductID ;
	this.Quantity = Quantity ;
	this.Price = Price ;
	this.Subtotal = Subtotal ;
}
}