const ContactService = require('../services/contact.service.js');
const MongoDB = require('../utils/mongodb.util.js');
const ApiError = require('../api-error.js');

exports.create = async (req, res, next) => {
    if (!req.body?.name) {
        return next(new ApiError(400, 'Name can not be empty'));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.create(req.body);
        return res.send(document);
    } catch (error) {
        return next(
            new ApiError(500, 'An error occurred while creating contact')
        );
    }
};

//
exports.findAll = async (req, res, next) => {
    let documents = [];
    try {
        const contactService = new ContactService(MongoDB.client);
        const { name } = req.query;
        if (name) {
            documents = await contactService.findByName(name);
        } else {
            documents = await contactService.find({});
        }
    } catch (error) {
        return next(
            new ApiError(500, 'An error occurred while retrieving contact')
        );
    }
    return res.send(documents);
};

exports.findOne = async (req, res) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.findById(req.params.id);

        return document
            ? res.send(document)
            : next(new ApiError(500, 'contact not found'));
    } catch (error) {
        return next(
            new ApiError(
                500,
                'Error retrieving contact with id ' + req.params.id
            )
        );
    }
};

exports.update = async (req, res) => {
    if (Object.keys(req.body).length === 0) {
        return next(new ApiError(400, 'Data to update can not be empty'));
    }
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.update(req.params.id, req.body);
        return document
            ? res.send({ message: 'Contact was update successfully' })
            : next(new ApiError(500, 'contact not found'));
    } catch (error) {
        return next(new ApiError(500, 'Error updating contact'));
    }
};
exports.delete = async (req, res) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.delete(req.params.id);

        return document
            ? res.send({ message: 'Contact was delete successfully' })
            : next(new ApiError(500, 'contact not found'));
    } catch (error) {
        return next(new ApiError(500, 'Error updating contact'));
    }
};
exports.deleteAll = async (req, res) => {
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.deleteAll();

        return document
            ? res.send({ message: 'deleteAll was successfully' })
            : next(new ApiError(500, 'contact not found'));
    } catch (error) {
        return next(new ApiError(500, 'Error updating contact'));
    }
};
exports.findAllFavorite = async (req, res) => {
    console.log(123);
    try {
        const contactService = new ContactService(MongoDB.client);
        const document = await contactService.findFavorite();

        return res.send(document);
    } catch (error) {
        return next(new ApiError(500, 'Error updating contact'));
    }
};
