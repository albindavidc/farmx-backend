import mongoose, { Document, Schema } from "mongoose";

export interface CommunityDocument extends Document {
  name: string;
  description: string;
  createdAt: Date;
  createdBy: string;
  memberCount: number;
  imageUrl?: string;
  categories?: string[];
}

const CommunitySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
  memberCount: { type: Number, default: 1 },
  imageUrl: { type: String },
  categories: [{ type: String }],
});

export const CommunityModel = mongoose.model<CommunityDocument>("Community", CommunitySchema);
