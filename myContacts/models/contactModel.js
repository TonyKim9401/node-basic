const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: [true, "phon number must be filled."]
    }
}, 
{
    timestamps: true
});

// schema -> model
// mongoose.model(model name, schema name)
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;