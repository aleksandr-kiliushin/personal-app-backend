import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"

import { BoardSubjectsModule } from "#models/board-subjects/module"
import { UserModule } from "#models/user/module"

import { BoardsController } from "./controller"
import { BoardEntity } from "./entities/board.entity"
import { BoardsService } from "./service"

@Module({
  controllers: [BoardsController],
  exports: [BoardsService],
  imports: [TypeOrmModule.forFeature([BoardEntity]), BoardSubjectsModule, UserModule],
  providers: [BoardsController, BoardsService],
})
export class BoardsModule {}