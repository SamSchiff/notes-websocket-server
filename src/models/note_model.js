import mongoose, { Schema } from 'mongoose';


const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  width: Number,
  heigh: Number,
  text: String,
});

NoteSchema.set('toJSON', {
  virtuals: true,
});


const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
