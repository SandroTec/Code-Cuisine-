/** An ingredient and the amount required by a recipe. */
export interface Ingredient {

    /** Ingredient name. */
    name:string,
    /** Required quantity. */
    amount:number,
    /** Unit used for the quantity. */
    unit:'g' | 'ml' | 'piece';
}
