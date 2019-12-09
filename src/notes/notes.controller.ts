import { Controller, Get, Post, Put ,Body } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { NotesService } from './notes.service';
import { Note } from './interfaces/note.interface';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async create(@Body() createNoteDto: CreateNoteDto) {
    await this.notesService.create(createNoteDto);
  }

  @Put()
  async update(@Body() createNoteDto: CreateNoteDto) {
    await this.notesService.update(createNoteDto);
  }

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }
}
