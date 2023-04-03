const { Schema, model, Mongoose } = require('mongoose');

const reactionSchema = new Schema (
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: Schema.Types.ObjectId,        
        },
    },
    {
        reactionBody: {
            type: String,
            required: true,
            createdAt: {
                type: Schema.Types.Date,
                default: Date.now,
            },
        },
    },
    {
        username: {
            type: String
        },
    }, 
);

const thoughtSchema = new Schema (
    {
        thoughtText: {
            type: String,
            createdAt: {
                type: Schema.Types.Date,
                default: Date.now,
            },
            required: true,
        },
    },
    {
        username: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
    },
    {
        reactions: [
            {
                type: reactionSchema
            }
        ]
    },
    {
        toJSON: {
            virtuals: true, 
        },
        id: false,
    }
);


// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

thoughtSchema.virtual('reactionCount')
    .get(function () {
        return `${this.reactions.length}`;
    })
    .set(function () {
        this.set({ reactionsCount: reactions.length });
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought; 