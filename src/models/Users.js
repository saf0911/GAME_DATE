import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    maxlength: [ 20, 'We do not need that long of a name' ]
  },
  lastName: {
    type: String,
    maxlength: [ 20, 'That is a long last name' ]
  },
  birthdate: {
    type: String,
    maxlength: [ 20, 'Pictures only' ]
  },
  address: {
    type: String,
    maxlength: [ 300, 'Leave some information to start the conversation' ]
  },
  city: {
    type: String,
    maxlength: [ 25, 'City name is too long vote to change' ]
  },
  State: {
    type: String,
    unique: true,
    required: true,
    maxlength: [ 20, 'Username does not need to be that long' ]
  },
  Zip: {
    type: String,
    maxlength: [ 10, 'Just the zip' ]
  },

  asthma: {
    type: String,
    
  }

});

export default mongoose.model('User', userSchema);
