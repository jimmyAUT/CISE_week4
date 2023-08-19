/* eslint-disable prettier/prettier */
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Document } from 'mongoose';

// @Schema()
// export class Article extends Document {
//   @Prop({ required: true })
//   title: string;

//   @Prop({ required: true })
//   des: string;
// }

// export const ArticleSchema = SchemaFactory.createForClass(Article);

import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  authors: String,
  source: String,
  pubyear: String,
  doi: String,
  claim: String,
  evidence: String,
});

export interface Article extends mongoose.Document {
  title: string;
  authors: string;
  source: string;
  pubyear: string;
  doi: string;
  claim: string;
  evidence: string;
}
