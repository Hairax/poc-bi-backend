import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Activos } from '../activos/activos.entity';

@Entity('maintenance')
export class Maintenance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column({ type: 'date' })
  scheduledDate: Date;

  @Column({
    type: 'enum',
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending',
  })
  status: 'Pending' | 'In Progress' | 'Completed';

  @Column({ type: 'float', nullable: true })
  cost: number;

  @ManyToOne(() => Activos, (activos) => activos.maintenances)
  activos: Activos;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
