import { Vendor } from './vendor';

export class Product {
	ID: number;
	VendorID: number;
	PartNumber: string;
	Name: string;
	Price: number; 
	Unit: string;
	Photopath: string; 
	Active: boolean;
	//

constructor(
	ID: number,
	VendorID: number,
	PartNumber: string,
	Name: string,
	Price: number,
	Unit: string,
	Photopath: string,
	Active: boolean,
	)
	{
	this.ID = ID;
	this.VendorID = VendorID;
	this.PartNumber = PartNumber;
	this.Name = Name;
	this.Price = Price;
	this.Unit = Unit;
	this.Photopath = Photopath;
	this.Active =  Active;
	//
	}
}