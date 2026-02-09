// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.
export function combat(health: number, damage: number): number {
  if (health <= damage) {
    return 0;
  }

  return health - damage;
}
