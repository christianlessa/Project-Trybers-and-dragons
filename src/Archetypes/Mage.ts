import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _hability: EnergyType;
  static countInstances = 0;
  
  constructor(name: string) {
    super(name);
    this._hability = 'mana';
    Mage.countInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._hability;
  }

  static createdArchetypeInstances(): number {
    return this.countInstances;
  }
}

export default Mage;
