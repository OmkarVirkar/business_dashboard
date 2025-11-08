/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/auth/src/auth.controller.ts":
/*!******************************************!*\
  !*** ./apps/auth/src/auth.controller.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/auth/src/auth.service.ts");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    getHello() {
        return this.authService.getHello();
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('authHello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AuthController.prototype, "getHello", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ }),

/***/ "./apps/auth/src/auth.module.ts":
/*!**************************************!*\
  !*** ./apps/auth/src/auth.module.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/auth/src/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/auth/src/auth.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/auth/src/users/users.module.ts");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [common_2.DatabaseModule, users_module_1.UsersModule],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService]
    })
], AuthModule);


/***/ }),

/***/ "./apps/auth/src/auth.service.ts":
/*!***************************************!*\
  !*** ./apps/auth/src/auth.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AuthService = class AuthService {
    getHello() {
        return 'Hello World!';
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);


/***/ }),

/***/ "./apps/auth/src/users/dto/create-user.dto.ts":
/*!****************************************************!*\
  !*** ./apps/auth/src/users/dto/create-user.dto.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);


/***/ }),

/***/ "./apps/auth/src/users/models/users.schema.ts":
/*!****************************************************!*\
  !*** ./apps/auth/src/users/models/users.schema.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.UserDocument = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
let UserDocument = class UserDocument extends common_1.AbstractDocument {
};
exports.UserDocument = UserDocument;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDocument.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], UserDocument.prototype, "password", void 0);
exports.UserDocument = UserDocument = __decorate([
    (0, mongoose_1.Schema)({ versionKey: false })
], UserDocument);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(UserDocument);


/***/ }),

/***/ "./apps/auth/src/users/users.controller.ts":
/*!*************************************************!*\
  !*** ./apps/auth/src/users/users.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/auth/src/users/users.service.ts");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./apps/auth/src/users/dto/create-user.dto.ts");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    helloWorld() {
        return 'Hello World';
    }
    async create(createUserDto) {
        return this.usersService.create(createUserDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)('hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "helloWorld", null);
__decorate([
    (0, common_1.Post)('createUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object])
], UsersController);


/***/ }),

/***/ "./apps/auth/src/users/users.module.ts":
/*!*********************************************!*\
  !*** ./apps/auth/src/users/users.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/auth/src/users/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/auth/src/users/users.service.ts");
const common_2 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const users_schema_1 = __webpack_require__(/*! ./models/users.schema */ "./apps/auth/src/users/models/users.schema.ts");
const users_respository_1 = __webpack_require__(/*! ./users.respository */ "./apps/auth/src/users/users.respository.ts");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            common_2.DatabaseModule,
            common_2.DatabaseModule.forFeature([
                {
                    name: users_schema_1.UserDocument.name,
                    schema: users_schema_1.UserSchema
                }
            ]),
            common_2.LoggerModule
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, users_respository_1.UserRepository],
        exports: [users_service_1.UsersService]
    })
], UsersModule);


/***/ }),

/***/ "./apps/auth/src/users/users.respository.ts":
/*!**************************************************!*\
  !*** ./apps/auth/src/users/users.respository.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var UserRepository_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const common_1 = __webpack_require__(/*! @app/common */ "./libs/common/src/index.ts");
const common_2 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_schema_1 = __webpack_require__(/*! ./models/users.schema */ "./apps/auth/src/users/models/users.schema.ts");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let UserRepository = UserRepository_1 = class UserRepository extends common_1.AbstractRepository {
    constructor(userModel) {
        super(userModel);
        this.logger = new common_2.Logger(UserRepository_1.name);
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = UserRepository_1 = __decorate([
    (0, common_2.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(users_schema_1.UserDocument.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserRepository);


/***/ }),

/***/ "./apps/auth/src/users/users.service.ts":
/*!**********************************************!*\
  !*** ./apps/auth/src/users/users.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_respository_1 = __webpack_require__(/*! ./users.respository */ "./apps/auth/src/users/users.respository.ts");
let UsersService = class UsersService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        return this.userRepository.create(createUserDto);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof users_respository_1.UserRepository !== "undefined" && users_respository_1.UserRepository) === "function" ? _a : Object])
], UsersService);


/***/ }),

/***/ "./libs/common/src/config/config.module.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/config/config.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConfigModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const Joi = __webpack_require__(/*! joi */ "joi");
let ConfigModule = class ConfigModule {
};
exports.ConfigModule = ConfigModule;
exports.ConfigModule = ConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                validationSchema: Joi.object({
                    MONGODB_URI: Joi.string().required()
                })
            })
        ],
        providers: [config_1.ConfigService],
        exports: [config_1.ConfigService]
    })
], ConfigModule);


/***/ }),

/***/ "./libs/common/src/config/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/config/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./config.module */ "./libs/common/src/config/config.module.ts"), exports);


/***/ }),

/***/ "./libs/common/src/database/abstract.repository.ts":
/*!*********************************************************!*\
  !*** ./libs/common/src/database/abstract.repository.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractRepository = void 0;
const mongoose_1 = __webpack_require__(/*! mongoose */ "mongoose");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class AbstractRepository {
    constructor(model) {
        this.model = model;
    }
    async create(document) {
        try {
            const createdDocument = new this.model({
                ...document,
                _id: new mongoose_1.Types.ObjectId()
            });
            await createdDocument.save();
            this.logger.log(`Created document: ${createdDocument._id}`);
            return createdDocument.toJSON();
        }
        catch (error) {
            this.logger.error(`Error creating document: ${error.message}`);
            throw new Error('Failed to create document');
        }
    }
    async findOne(filterQuery) {
        try {
            const document = await this.model
                .findOne(filterQuery)
                .lean()
                .exec();
            if (!document) {
                this.logger.warn(`Document not found with filter: ${JSON.stringify(filterQuery)}`);
                throw new common_1.NotFoundException('Document not found');
            }
            return document;
        }
        catch (error) {
            this.logger.error(`Error finding document: ${error.message}`);
            throw new Error('Failed to find document');
        }
    }
    async findOneAndUpdate(filterQuery, update) {
        try {
            const document = await this.model
                .findOneAndUpdate(filterQuery, update, {
                new: true
            })
                .lean()
                .exec();
            if (!document) {
                this.logger.warn(`Document not found with filter: ${JSON.stringify(filterQuery)}`);
                throw new common_1.NotFoundException('Document not found');
            }
            return document;
        }
        catch (error) {
            this.logger.error(`Error updating document: ${error.message}`);
            throw new Error('Failed to update document');
        }
    }
    async find(filterQuery) {
        try {
            const documents = await this.model
                .find(filterQuery)
                .lean()
                .exec();
            return documents;
        }
        catch (error) {
            this.logger.error(`Error finding documents: ${error.message}`);
            throw new Error('Failed to find documents');
        }
    }
    async findOneAndDelete(filterQuery) {
        try {
            const document = await this.model
                .findOneAndDelete(filterQuery)
                .lean()
                .exec();
            if (!document) {
                this.logger.warn(`Document not found with filter: ${JSON.stringify(filterQuery)}`);
                throw new common_1.NotFoundException('Document not found');
            }
            return document;
        }
        catch (error) {
            this.logger.error(`Error deleting document: ${error.message}`);
            throw new Error('Failed to delete document');
        }
    }
    async upsert(filterQuery, updateDocument) {
        try {
            const existingDocument = await this.model
                .findOneAndUpdate(filterQuery, updateDocument, {
                new: true,
                upsert: true
            })
                .lean()
                .exec();
            if (!existingDocument) {
                this.logger.warn(`Document not found with filter: ${JSON.stringify(filterQuery)}`);
                throw new common_1.NotFoundException('Failed to upsert document');
            }
            return existingDocument;
        }
        catch (error) {
            this.logger.error(`Error upserting document: ${error.message}`);
            throw new Error('Failed to upsert document');
        }
    }
    async aggregate(pipeline) {
        try {
            const document = await this.model.aggregate(pipeline).exec();
            return document;
        }
        catch (error) {
            this.logger.error(`Error occurred during aggregation: ${error.message}`);
            throw new Error('Aggregation failed');
        }
    }
}
exports.AbstractRepository = AbstractRepository;


/***/ }),

/***/ "./libs/common/src/database/abstract.schema.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/abstract.schema.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractDocument = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let AbstractDocument = class AbstractDocument {
};
exports.AbstractDocument = AbstractDocument;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId }),
    __metadata("design:type", typeof (_a = typeof mongoose_2.Types !== "undefined" && mongoose_2.Types.ObjectId) === "function" ? _a : Object)
], AbstractDocument.prototype, "_id", void 0);
exports.AbstractDocument = AbstractDocument = __decorate([
    (0, mongoose_1.Schema)()
], AbstractDocument);


/***/ }),

/***/ "./libs/common/src/database/database.module.ts":
/*!*****************************************************!*\
  !*** ./libs/common/src/database/database.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const config_service_1 = __webpack_require__(/*! @nestjs/config/dist/config.service */ "@nestjs/config/dist/config.service");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
let DatabaseModule = class DatabaseModule {
    static forFeature(models) {
        return mongoose_1.MongooseModule.forFeature(models);
    }
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    uri: configService.get('MONGODB_URI')
                }),
                inject: [config_service_1.ConfigService]
            })
        ]
    })
], DatabaseModule);


/***/ }),

/***/ "./libs/common/src/database/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/src/database/index.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database.module */ "./libs/common/src/database/database.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./abstract.repository */ "./libs/common/src/database/abstract.repository.ts"), exports);
__exportStar(__webpack_require__(/*! ./abstract.schema */ "./libs/common/src/database/abstract.schema.ts"), exports);


/***/ }),

/***/ "./libs/common/src/index.ts":
/*!**********************************!*\
  !*** ./libs/common/src/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./config */ "./libs/common/src/config/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./database */ "./libs/common/src/database/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./logger */ "./libs/common/src/logger/index.ts"), exports);


/***/ }),

/***/ "./libs/common/src/logger/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/src/logger/index.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./logger.module */ "./libs/common/src/logger/logger.module.ts"), exports);


/***/ }),

/***/ "./libs/common/src/logger/logger.module.ts":
/*!*************************************************!*\
  !*** ./libs/common/src/logger/logger.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggerModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
let LoggerModule = class LoggerModule {
};
exports.LoggerModule = LoggerModule;
exports.LoggerModule = LoggerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_pino_1.LoggerModule.forRoot({
                pinoHttp: {
                    transport: {
                        target: 'pino-pretty',
                        options: { singleLine: true }
                    }
                }
            })
        ]
    })
], LoggerModule);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/config/dist/config.service":
/*!*****************************************************!*\
  !*** external "@nestjs/config/dist/config.service" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("@nestjs/config/dist/config.service");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/mongoose":
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/mongoose");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("joi");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "nestjs-pino":
/*!******************************!*\
  !*** external "nestjs-pino" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-pino");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*******************************!*\
  !*** ./apps/auth/src/main.ts ***!
  \*******************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const auth_module_1 = __webpack_require__(/*! ./auth.module */ "./apps/auth/src/auth.module.ts");
const nestjs_pino_1 = __webpack_require__(/*! nestjs-pino */ "nestjs-pino");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useLogger(app.get(nestjs_pino_1.Logger));
    await app.listen(process.env.port ?? 3001);
}
bootstrap();

})();

/******/ })()
;