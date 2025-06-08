// Types are used to describe certain properities of an object
export type Category = "Food" | "Transport" | "Utilities" | "Entertainment" | "Other"; 

// The interface describes the shape of the object, what properities it should have and values it should store. Like a blueprint
export interface Expense { 
    id: string;
    description: string;
    amount: number;
    category: Category;
    date: string;
}