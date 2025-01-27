import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ActivosService } from './activos.service';
import { Activos } from './activos.entity';

@Controller('activos')
export class ActivosController {
  constructor(private readonly activosService: ActivosService) {}

  @Get()
  findAll(): Promise<Activos[]> {
    return this.activosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Activos> {
    return this.activosService.findOne(+id);
  }

  @Post()
  create(@Body() activo: Partial<Activos>): Promise<Activos> {
    return this.activosService.create(activo);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() activo: Partial<Activos>,
  ): Promise<Activos> {
    return this.activosService.update(+id, activo);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.activosService.remove(+id);
  }
}
