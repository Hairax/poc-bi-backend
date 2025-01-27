import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Maintenance } from '../maintenance/maintenance.entity';

@Entity('activos')
export class Activos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column()
  quantity: number;

  @Column({ type: 'float' })
  price: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Maintenance, (maintenance) => maintenance.activos)
  maintenances: Maintenance[];
}
