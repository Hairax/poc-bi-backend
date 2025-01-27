import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maintenance } from './maintenance.entity';

@Injectable()
export class MaintenanceService {
  constructor(
    @InjectRepository(Maintenance)
    private maintenanceRepository: Repository<Maintenance>,
  ) {}

  findAll(): Promise<Maintenance[]> {
    return this.maintenanceRepository.find();
  }

  async findOne(id: number): Promise<Maintenance> {
    const maintenance = await this.maintenanceRepository.findOneBy({ id });
    if (!maintenance) {
      throw new Error(`Maintenance with id ${id} no found`);
    }
    return maintenance;
  }

  create(maintenance: Partial<Maintenance>): Promise<Maintenance> {
    const newMaintenance = this.maintenanceRepository.create(maintenance);
    return this.maintenanceRepository.save(newMaintenance);
  }

  async update(
    id: number,
    maintenance: Partial<Maintenance>,
  ): Promise<Maintenance> {
    await this.maintenanceRepository.update(id, maintenance);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.maintenanceRepository.delete(id);
  }
}
