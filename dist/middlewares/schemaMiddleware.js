"use strict";
exports.__esModule = true;
exports.validateSchemaMiddleware = void 0;
function validateSchemaMiddleware(schema) {
    return function (req, res, next) {
        var validation = schema.validate(req.body, { abortEarly: false });
        if (validation.error) {
            var details = validation.error.details;
            var errors = details.map(function (details) {
                var _a, _b;
                var erro = details.path[0];
                if (erro !== "url") {
                    var message = details.message.split(" ").splice(1).join(" ");
                    return _a = {}, _a[erro] = message, _a;
                }
                else {
                    return _b = {}, _b[erro] = "Invalid Url", _b;
                }
            });
            return res.status(422).send(errors);
        }
        next();
    };
}
exports.validateSchemaMiddleware = validateSchemaMiddleware;
