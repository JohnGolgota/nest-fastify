import { Module } from "@nestjs/common";

import { LoggerModule } from "../logger/logger.module";
import { HealthController } from "./health.controller";

@Module({
  imports: [LoggerModule],
  controllers: [HealthController],
})
export class HealthModule {}
