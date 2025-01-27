import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activos } from './activos.entity';

@Injectable()
export class ActivosService {
  constructor(
    @InjectRepository(Activos)
    private activosRepository: Repository<Activos>,
  ) {}

  findAll(): Promise<Activos[]> {
    return this.activosRepository.find();
  }

  async findOne(id: number): Promise<Activos> {
    const activo = await this.activosRepository.findOneBy({ id });
    if (!activo) {
      throw new Error(`Activo with id ${id} not found`);
    }
    return activo;
  }

  create(activo: Partial<Activos>): Promise<Activos> {
    const newActivos = this.activosRepository.create(activo);
    return this.activosRepository.save(newActivos);
  }

  async update(id: number, activo: Partial<Activos>): Promise<Activos> {
    await this.activosRepository.update(id, activo);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.activosRepository.delete(id);
  }
}
