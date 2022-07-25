const mongoose = require('mongoose');

const { Schema } = mongoose;
const { ObjectId } = Schema;

const UserSchema = new Schema({
    name: String,
});

const User = mongoose.model(
    'User',
    UserSchema,
);

module.exports = User;