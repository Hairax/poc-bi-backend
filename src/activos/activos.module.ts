import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivosController } from './activos.controller';
import { ActivosService } from './activos.service';
import { Activos } from './activos.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Activos])],
  controllers: [ActivosController],
  providers: [ActivosService],
})
export class ActivosModule {}
