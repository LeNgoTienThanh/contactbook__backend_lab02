exports.create = async (req, res, next) => {
    res.send({ message: 'create handler' });
};
exports.findAll = async (req, res, next) => {
    res.send({ message: 'findAll handler' });
};
exports.findOne = async (req, res) => {
    res.send({ message: 'findOne handler' });
};
exports.update = async (req, res) => {
    res.send({ message: 'update handler' });
};
exports.deletee = async (req, res) => {
    res.send({ message: 'deletee handler' });
};
exports.deleteAll = async (req, res) => {
    res.send({ message: 'deleteAll handler' });
};
exports.findAllFavorite = (req, res) => {
    res.send({ message: 'findAllFavorite handler' });
};
