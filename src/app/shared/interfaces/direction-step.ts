/** A single instruction in a recipe's preparation directions. */
export interface DirectionStep {
  /** Short title for the preparation step. */
  headline: string;
  /** Detailed instruction for completing the step. */
  description: string;
  /** Identifier of the chef assigned to this step. */
  chef: number;
}
