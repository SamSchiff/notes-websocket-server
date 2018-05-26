import Note from '../models/note_model';


export const getNotes = () => {
  return Note.find({}).then((notes) => {
    return notes.reduce((result, item) => {
      result[item.id] = item;
      return result;
    }, {});
  });
};

export const deleteNote = (id) => {
  return Note.findByIdAndRemove(id, (err) => {});
  // to quote Prof. Cormen: left as an exercise to the reader
  // remember to return the mongoose function you use rather than just delete
};

export const createNote = (fields) => {
  const note = new Note();
  note.x = fields.x;
  note.y = fields.y;
  note.title = fields.title;
  note.zIndex = fields.zIndex;
  note.text = fields.text;
  note.width = fields.width;
  note.height = fields.height;

  return note.save();
  // you know the drill. create a new Note mongoose object
  // return .save()
};

export const updateNote = (id, fields) => {
  return Note.findById(id)
    .then((note) => {
    // check out this classy way of updating only the fields necessary
      Object.keys(fields).forEach((k) => {
        note[k] = fields[k];
      });
      return note.save();
    });
};
