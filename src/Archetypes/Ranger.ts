import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _hability: EnergyType;
  static countInstances = 0;
  
  constructor(name: string) {
    super(name);
    
    this._hability = 'stamina';
    Ranger.countInstances += 1;
  }
  
  get energyType(): EnergyType {
    return this._hability;
  }

  static createdArchetypeInstances(): number {
    return this.countInstances;
  }
}

export default Ranger;
