import * as mongoose from 'mongoose';

export const NoteSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: String,
});
