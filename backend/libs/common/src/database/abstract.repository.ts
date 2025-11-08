import {
  FilterQuery,
  Model,
  Types,
  UpdateQuery,
  PipelineStage
} from 'mongoose';
import { AbstractDocument } from './abstract.schema';
import { Logger, NotFoundException } from '@nestjs/common';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  protected abstract readonly logger: Logger;
  constructor(protected readonly model: Model<TDocument>) {}

  async create(document: Omit<TDocument, '_id'>): Promise<TDocument> {
    try {
      const createdDocument = new this.model({
        ...document,
        _id: new Types.ObjectId()
      });
      await createdDocument.save();
      this.logger.log(`Created document: ${createdDocument._id}`);
      return createdDocument.toJSON() as unknown as TDocument;
    } catch (error) {
      this.logger.error(`Error creating document: ${error.message}`);
      throw new Error('Failed to create document');
    }
  }

  async findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument> {
    try {
      const document = await this.model
        .findOne(filterQuery)
        .lean<TDocument>()
        .exec();
      if (!document) {
        this.logger.warn(
          `Document not found with filter: ${JSON.stringify(filterQuery)}`
        );
        throw new NotFoundException('Document not found');
      }
      return document as unknown as TDocument;
    } catch (error) {
      this.logger.error(`Error finding document: ${error.message}`);
      throw new Error('Failed to find document');
    }
  }

  async findOneAndUpdate(
    filterQuery: FilterQuery<TDocument>,
    update: UpdateQuery<TDocument>
  ): Promise<TDocument> {
    try {
      const document = await this.model
        .findOneAndUpdate(filterQuery, update, {
          new: true
        })
        .lean<TDocument>()
        .exec();

      if (!document) {
        this.logger.warn(
          `Document not found with filter: ${JSON.stringify(filterQuery)}`
        );
        throw new NotFoundException('Document not found');
      }
      return document as unknown as TDocument;
    } catch (error) {
      this.logger.error(`Error updating document: ${error.message}`);
      throw new Error('Failed to update document');
    }
  }

  async find(filterQuery: FilterQuery<TDocument>): Promise<TDocument[]> {
    try {
      const documents = await this.model
        .find(filterQuery)
        .lean<TDocument>()
        .exec();
      return documents as unknown as TDocument[];
    } catch (error) {
      this.logger.error(`Error finding documents: ${error.message}`);
      throw new Error('Failed to find documents');
    }
  }

  async findOneAndDelete(
    filterQuery: FilterQuery<TDocument>
  ): Promise<TDocument> {
    try {
      const document = await this.model
        .findOneAndDelete(filterQuery)
        .lean<TDocument>()
        .exec();
      if (!document) {
        this.logger.warn(
          `Document not found with filter: ${JSON.stringify(filterQuery)}`
        );
        throw new NotFoundException('Document not found');
      }
      return document as unknown as TDocument;
    } catch (error) {
      this.logger.error(`Error deleting document: ${error.message}`);
      throw new Error('Failed to delete document');
    }
  }

  async upsert(
    filterQuery: FilterQuery<TDocument>,
    updateDocument: UpdateQuery<TDocument>
  ): Promise<TDocument> {
    try {
      const existingDocument = await this.model
        .findOneAndUpdate(filterQuery, updateDocument, {
          new: true,
          upsert: true
        })
        .lean<TDocument>()
        .exec();

      if (!existingDocument) {
        this.logger.warn(
          `Document not found with filter: ${JSON.stringify(filterQuery)}`
        );
        throw new NotFoundException('Failed to upsert document');
      }
      return existingDocument as unknown as TDocument;
    } catch (error) {
      this.logger.error(`Error upserting document: ${error.message}`);
      throw new Error('Failed to upsert document');
    }
  }

  async aggregate<R>(pipeline: PipelineStage[]): Promise<R[]> {
    try {
      const document = await this.model.aggregate<R>(pipeline).exec();
      return document as unknown as R[];
    } catch (error) {
      this.logger.error(`Error occurred during aggregation: ${error.message}`);
      throw new Error('Aggregation failed');
    }
  }
}
