import mongoose from "mongoose";

const bookSchema = mongoose.Schema (
    {
        title: {
            type: "string",
            required: true,
        },
        publishYear: {
            type: "string",
             required: true,
        },
        author:{
            type: "String",
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const Book = mongoose.model('cat',bookSchema);