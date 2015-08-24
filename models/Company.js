var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Company = new keystone.List('Company', {
	autokey: { from: 'name', path: 'key', unique: true }
});

Company.add({
	name: { type: String, required: true, index: true },
	website: { type: Types.Url, index: true },
	github: { type: String, size: 'small', index: true },
	twitter: { type: Types.Password, size: 'small', index: true }
});

transform.toJSON(Company);

Company.defaultColumns = 'name, website, github, twitter';
Company.register();
