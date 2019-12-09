export class CreateNoteDto {
  readonly title: string;
  readonly description: string;
  readonly done: boolean;
  readonly created: Date;
}
