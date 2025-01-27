import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { Maintenance } from './maintenance.entity';

@Controller('maintenance')
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Get()
  findAll(): Promise<Maintenance[]> {
    return this.maintenanceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Maintenance> {
    return this.maintenanceService.findOne(+id);
  }

  @Post()
  create(@Body() maintenance: Partial<Maintenance>): Promise<Maintenance> {
    return this.maintenanceService.create(maintenance);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() maintenance: Partial<Maintenance>,
  ): Promise<Maintenance> {
    return this.maintenanceService.update(+id, maintenance);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.maintenanceService.remove(+id);
  }
}
