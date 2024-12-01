const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');

const Schema = mongoose.Schema;
var mongooseDelete = require('mongoose-delete');

const Course = new Schema({
    name: { type: String,},
    description: { type: String },
    image: { type: String },
    videoID: { type: String },
    level: { type: String },
    slug: { type: String, slug: 'name', unique: true },
},{
    timestamps: true
});

Course.query.sortable = function(req) {
    if (req.query.hasOwnProperty('_sort')){
        const isValidtype = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        });
    }
    return this;
};

Course.plugin(mongooseDelete, 
    { overrideMethods: 'all' ,
     deletedAt : true }
);
mongoose.plugin(slug);

module.exports = mongoose.model('Course', Course);
