import { z } from "zod";

const DeveloperSchema = z.object({
              name: z.string().optional(),
              info: z.string().optional(),
});

const ProjectDetailsSchema = z.object({
              buildingType: z.string().optional(),
              bedrooms: z.string().default("Coming Soon"),
              unitsStories: z.string().optional(),
              developer: DeveloperSchema,
              estimatedCompletion: z.string().default("TBA"),  // To Be Announced
});

const LocationSchema = z.object({
              address: z.string().default("Address Pending"),
              city_name: z.string().optional(),
              province: z.string().optional(),
              street_name: z.string().optional(),
});

const FinancialDetailsSchema = z.object({
              incentives: z.string().optional(),
              price: z.string().optional(),
              sizeSqFt: z.string().optional(),
});

const StatusDetailsSchema = z.object({
              status: z.string().default("Coming Soon"),
              summary: z.string().optional(),
});

const ImageSchema = z.object({
              imageName: z.string().optional(),
              imageDescription: z.string().optional(),
              imagePath: z.string().optional(),
});

const UnitSchema = z.object({
              br: z.number().optional(),
              status: z.string().optional(),
              statusName: z.string().optional(),
              colType: z.string().optional(),
              unitType: z.string().optional(),
              unitName: z.string().optional(),
              ba: z.number().optional(),
              sqft: z.number().optional(),
              lotBalc: z.string().optional(),
              price: z.number().optional(),
              lastPrice: z.number().optional(),
              lastPriceWithValue: z.number().optional(),
              unitStyle: z.string().optional(),
              url: z.string().optional(),
              image: z.string().optional(),
});

const ProjectSchema = z.object({
              name: z.string(),
              slug: z.string(),
              description: z.string().optional(),
              location: LocationSchema,
              project_details: ProjectDetailsSchema,
              financial_details: FinancialDetailsSchema,
              status_details: StatusDetailsSchema,
              images: z.array(ImageSchema).optional(),
              units: z.array(UnitSchema).optional(),
});

// Function to validate and transform data using Zod
function validateAndTransformProjectData(rawData) {
              const result = ProjectSchema.safeParse(rawData);
              if (result.success) {
                            console.log("Validated Data:", result.data);
                            return result.data;
              } else {
                            console.error("Validation Errors:", result.error.format());
                            throw new Error("Invalid project data provided.");
              }
}
