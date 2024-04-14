import mongoose, { Schema, Document } from "mongoose";

interface Image extends Document {
              imageName: string;
              imageDescription: string;
              imagePath: string;
}

interface Unit extends Document {
              br: number;
              status: string;
              statusName: string;
              colType: string;
              unitType: string;
              unitName: string;
              ba: number;
              sqft: number;
              lotBalc: string;
              price: number;
              lastPrice: number;
              lastPriceWithValue: number;
              unitStyle: string;
              url: string;
              image: string;
}

interface Project extends Document {
              name: string;
              slug: string;
              description: string;
              location: {
                            address: string;
                            city_name: string;
                            province: string;
                            street_name: string;
              };
              project_details: {
                            buildingType: string;
                            bedrooms: string;
                            unitsStories: string;
                            developer: {
                                          name: string;
                                          info: string;
                            };
                            estimatedCompletion: string;
              };
              financial_details: {
                            incentives: string;
                            price: string;
                            sizeSqFt: string;
              };
              status_details: {
                            status: string;
                            summary: string;
              };
              images: Image[];
              units: Unit[];
}

const ImageSchema = new Schema<Image>({
              imageName: { type: String },
              imageDescription: { type: String },
              imagePath: { type: String }
});

const UnitSchema = new Schema<Unit>({
              br: { type: Number },
              status: { type: String },
              statusName: { type: String },
              colType: { type: String },
              unitType: { type: String },
              unitName: { type: String },
              ba: { type: Number },
              sqft: { type: Number },
              lotBalc: { type: String },
              price: { type: Number },
              lastPrice: { type: Number },
              lastPriceWithValue: { type: Number },
              unitStyle: { type: String },
              url: { type: String },
              image: { type: String }
});

const ProjectSchema = new Schema<Project>({
              name: { type: String, required: true },
              slug: { type: String, required: true },
              description: { type: String },
              location: {
                            address: { type: String },
                            city_name: { type: String },
                            province: { type: String },
                            street_name: { type: String }
              },
              project_details: {
                            buildingType: { type: String },
                            bedrooms: { type: String },
                            unitsStories: { type: String },
                            developer: {
                                          name: { type: String },
                                          info: { type: String }
                            },
                            estimatedCompletion: { type: String }
              },
              financial_details: {
                            incentives: { type: String },
                            price: { type: String },
                            sizeSqFt: { type: String }
              },
              status_details: {
                            status: { type: String },
                            summary: { type: String }
              },
              images: [ImageSchema],
              units: [UnitSchema]
});

const ProjectModel =
              (mongoose.models.Project as mongoose.Model<Project>) ||
              mongoose.model<Project>('Project', ProjectSchema);

export default ProjectModel;
